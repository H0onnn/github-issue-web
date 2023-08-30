import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { Endpoints } from '@octokit/types';

type IssueItemProps = {
  issue: Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'][number];
};

const IssueItem = ({ issue }: IssueItemProps) => {
  return (
    <IssueLayout>
      <IssueHeaderContainer>
        <IssueTitleContainer>
          <span>#{issue.number}</span>
          <span>{issue.title}</span>
        </IssueTitleContainer>
        <RightContent>
          <span>코멘트: {issue.comments}</span>
        </RightContent>
      </IssueHeaderContainer>
      <IssueDetailsContainer>
        <span>작성자: {issue.user?.login}</span>
        <span>작성일: {new Date(issue.created_at).toLocaleDateString('ko-KR')}</span>
      </IssueDetailsContainer>
    </IssueLayout>
  );
};

export default IssueItem;

const IssueLayout = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  width: 100%;

  &:hover {
    background-color: ${colors.hover};
  }
`;

const IssueHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const IssueTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  max-width: calc(100% - 100px);

  & > span:first-child {
    font-weight: bold;
    width: 50px;
    text-align: right;
  }

  & > span:nth-child(2) {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 70px);
  }
`;

const IssueDetailsContainer = styled.div`
  font-size: 0.8rem;
  margin-top: 5px;
  display: flex;
  gap: 10px;
`;

const RightContent = styled.div`
  display: flex;
  gap: 10px;
  width: 80px;
`;
