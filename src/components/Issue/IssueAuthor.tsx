import styled from 'styled-components';
import { colors } from '../../constants/colors';
import convertDateToKorean from '../../utils/covertDate';
import { AiOutlineComment } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

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
      {author.avatar_url ? (
        <AuthorImage src={author.avatar_url} alt={author.login} />
      ) : (
        <CgProfile></CgProfile>
      )}
      <AuthorInfo>
        <AuthorName>{author.login}</AuthorName>
        <CreationDate>{convertDateToKorean(created_at)}</CreationDate>
      </AuthorInfo>
      <CommentCountWrap>
        <AiOutlineComment size={28}></AiOutlineComment>
        <span>{commentCount}</span>
      </CommentCountWrap>
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
  color: ${colors.gray};
`;

const CommentCountWrap = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  font-weight: bold;
`;
