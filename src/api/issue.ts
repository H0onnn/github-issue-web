import { Endpoints } from '@octokit/types';
import { octokit } from './octokit';

export const getAllIssues = async (
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

export const getIssueById = async (
  owner: string,
  repo: string,
  issue_number: number,
): Promise<Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data']> => {
  const result = await octokit.issues.get({
    owner,
    repo,
    issue_number,
  });
  console.log('API Response:', result);
  return result.data;
};
