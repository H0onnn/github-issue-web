import { useState, useEffect } from 'react';
import { getAllIssues, getIssueById } from '../api/issue';
import { Endpoints } from '@octokit/types';
import useLoading from './useLoading';
import useError from './useError';

export const useIssueData = () => {
  const [issues, setIssues] = useState<
    Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data']
  >([]);
  const [issue, setIssue] = useState<
    Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data'] | null
  >(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { loading, setLoading } = useLoading();
  const { error, setError, isError, setIsError } = useError();

  const loadMoreIssues = async () => {
    setLoading(true);
    try {
      const data = await getAllIssues('facebook', 'react', page);
      if (data.length === 0) {
        setHasMore(false);
        return;
      }
      setIssues(prevIssues => [...prevIssues, ...data]);
      setPage(prevPage => prevPage + 1);
    } catch (error: any) {
      console.error('이슈 데이터를 불러오는데 실패했습니다. : ', error);
      setIsError(true);
      setError({
        message: error.message || '이슈 데이터를 불러오는데 실패했습니다.',
        code: error.response?.status,
      });
    } finally {
      setLoading(false);
    }
  };

  const loadIssueById = async (id: number) => {
    setLoading(true);
    try {
      const data = await getIssueById('facebook', 'react', id);
      setIssue(data || null);
      return data || null;
    } catch (error: any) {
      console.error('이슈 데이터를 불러오는데 실패했습니다. : ', error);
      setIsError(true);
      setError({
        message: error.message || '이슈 데이터를 불러오는데 실패했습니다.',
        code: error.response?.status,
      });
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreIssues();
  }, []);

  return {
    issues,
    loading,
    loadMoreIssues,
    hasMore,
    isError,
    error,
    loadIssueById,
    issue,
    setIssue,
  };
};
