import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useIssueData } from '../hooks/useIssueData';
import IssueAuthor from '../components/Issue/IssueAuthor';
import styled from 'styled-components';
import IssueBodyContent from '../components/Issue/IssueBodyContent';

const IssueDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { loadIssueById, issue, setIssue } = useIssueData();

  useEffect(() => {
    (async () => {
      const fetchedIssue = await loadIssueById(Number(id));
      setIssue(fetchedIssue);
    })();
  }, []);

  if (!issue) return null;

  return (
    <IssueDetailLayout>
      <h1 style={{ margin: 0 }}>#{issue.number}</h1>
      <h2>{issue.title}</h2>
      <IssueAuthor
        author={issue.user}
        created_at={issue.created_at}
        commentCount={issue.comments}
      />
      {issue.body && <IssueBodyContent body={issue.body} />}
    </IssueDetailLayout>
  );
};

export default IssueDetailPage;

const IssueDetailLayout = styled.div`
  padding: 20px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
`;
