import { useState, useEffect } from 'react';
import fetchIssuesByPage from '../api/issue';
import { Endpoints } from '@octokit/types';
import useLoading from './useLoading';

export const useIssueData = () => {
  const [issues, setIssues] = useState<
    Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data']
  >([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { loading, setLoading, setLoadingMessage } = useLoading();

  const loadMoreIssues = async () => {
    setLoading(true);
    setLoadingMessage('데이터 불러오는 중 ...');

    try {
      const data = await fetchIssuesByPage('facebook', 'react', page);
      if (data.length === 0) {
        setHasMore(false);
        return;
      }
      setIssues(prevIssues => [...prevIssues, ...data]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('이슈 데이터를 불러오는데 실패했습니다. : ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMoreIssues();
  }, []);

  return { issues, loading, loadMoreIssues, hasMore };
};
