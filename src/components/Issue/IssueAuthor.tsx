import styled from 'styled-components';
import convertDateToKorean from '../../utils/covertDate';

type AuthorProps = {
  avatar_url: string;
  login: string;
} | null;

interface IssueAuthorProps {
  author: AuthorProps;
  created_at: string;
  commentCount: number;
}

const IssueAuthor = ({ author, created_at, commentCount }: IssueAuthorProps) => {
  if (!author) return null;

  return (
    <AuthorLayout>
      <AuthorImage src={author.avatar_url} alt={author.login} />
      <AuthorInfo>
        <AuthorName>{author.login}</AuthorName>
        <CreationDate>{convertDateToKorean(created_at)}</CreationDate>
      </AuthorInfo>
      <CommentCount>코멘트: {commentCount}</CommentCount>
    </AuthorLayout>
  );
};

export default IssueAuthor;

const AuthorLayout = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 10px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.span`
  font-weight: bold;
`;

const CreationDate = styled.span`
  font-size: 15px;
  color: #666;
`;

const CommentCount = styled.span`
  margin-left: auto;
  font-weight: bold;
`;
