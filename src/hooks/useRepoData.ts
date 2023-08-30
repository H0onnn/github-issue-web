import { useState, useEffect } from 'react';
import { Endpoints } from '@octokit/types';
import getRepoData from '../api/repoData';

const useRepoData = () => {
  const [repoData, setRepoData] = useState<
    Endpoints['GET /repos/{owner}/{repo}']['response']['data'] | null
  >(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const data = await getRepoData('facebook', 'react');
        setRepoData(data);
      } catch (error: any) {
        console.error('RepoData를 가져오는데 실패했습니다. :', error.message);
      }
    };
    fetchRepoData();
  }, []);

  return repoData;
};

export default useRepoData;
