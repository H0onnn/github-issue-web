import useRepoData from '../hooks/useRepoData';
import { styled } from 'styled-components';
import { colors } from '../constants/colors';
import { useNavigate } from 'react-router-dom';
import Button from '../components/UI/Button';

const Header = () => {
  const repoData = useRepoData();
  const navigate = useNavigate();

  return (
    <HeaderLayout>
      <div style={{ padding: '20px', width: '100px' }}></div>

      <HeaderTitle>{repoData ? `${repoData.owner.login} / ${repoData.name}` : null}</HeaderTitle>

      <HeaderButton>
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </HeaderButton>
    </HeaderLayout>
  );
};

export default Header;

const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
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
`;

const HeaderButton = styled.div`
  width: 100px;
  padding: 20px;
  text-align: center;

  & > button:hover {
    color: ${colors.primary};
  }
`;
