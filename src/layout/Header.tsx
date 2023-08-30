import useRepoData from '../hooks/useRepoData';
import { styled } from 'styled-components';
import { colors } from '../constants/colors';

const Header = () => {
  const repoData = useRepoData();

  return (
    <HeaderLayout>
      <HeaderTitle>{repoData ? `${repoData.owner.login}/${repoData.name}` : null}</HeaderTitle>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  background-color: ${colors.primary};
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
`;
