import useRepoData from '../hooks/useRepoData';
import { styled } from 'styled-components';
import { colors } from '../constants/colors';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const repoData = useRepoData();
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <HeaderTitle
        onClick={() => {
          navigate('/');
        }}
      >
        {repoData ? `${repoData.owner.login} / ${repoData.name}` : null}
      </HeaderTitle>
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
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  cursor: pointer;
`;
