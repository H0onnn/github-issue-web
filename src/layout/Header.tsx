import { useState, useEffect } from 'react';
import { Endpoints } from '@octokit/types';
import { styled } from 'styled-components';
import getRepoData from '../api/repoData';
import { colors } from '../constants/colors';

const Header = () => {
  const [repoData, setRepoData] = useState<
    Endpoints['GET /repos/{owner}/{repo}']['response']['data'] | null
  >(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const data = await getRepoData('facebook', 'react');
        setRepoData(data);
      } catch (error: any) {
        console.error('RepoData를 가져오는데 실패했습니다. :', error.message);
      }
    };
    fetchRepoData();
  }, []);

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
