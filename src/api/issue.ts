import { Endpoints } from '@octokit/types';
import { octokit } from './octokit';

const getAllIssues = async (
  owner: string,
  repo: string,
  state: 'open',
): Promise<Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data']> => {
  let issues: Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'] = [];
  let page = 1;

  while (true) {
    const result = await octokit.issues.listForRepo({
      owner,
      repo,
      state: 'open',
      sort: 'comments',
      direction: 'desc',
      per_page: 100,
      page,
    });

    if (result.data.length === 0) break;

    issues = [...issues, ...result.data];
    page++;
  }

  return issues;
};

export default getAllIssues;
