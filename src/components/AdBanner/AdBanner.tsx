import { styled } from 'styled-components';

const AdBanner = () => {
  const handleOpenWanted = () => {
    window.open('https://www.wanted.co.kr/', '_blank');
  };

  return (
    <AdBannerContainer onClick={handleOpenWanted}>
      <img
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        alt="광고 배너"
      />
      <h3>(광고) 모두가 나답게 일하고 즐겁게 성장할 수 있도록</h3>
    </AdBannerContainer>
  );
};

export default AdBanner;

const AdBannerContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    h3 {
      display: none;
    }
  }
`;
