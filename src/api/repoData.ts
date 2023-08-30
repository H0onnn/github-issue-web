import { Endpoints } from '@octokit/types';
import { octokit } from './octokit';

const getRepoData = async (
  owner: string,
  repo: string,
): Promise<Endpoints['GET /repos/{owner}/{repo}']['response']['data']> => {
  const result = await octokit.repos.get({
    owner,
    repo,
  });

  return result.data;
};

export default getRepoData;
