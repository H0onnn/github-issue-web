import { Endpoints } from '@octokit/types';
import { octokit } from './octokit';

const getAllIssues = async (
  owner: string,
  repo: string,
  page: number,
): Promise<Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data']> => {
  const result = await octokit.issues.listForRepo({
    owner,
    repo,
    state: 'open',
    sort: 'comments',
    direction: 'desc',
    per_page: 100,
    page,
  });

  return result.data;
};

export default getAllIssues;
