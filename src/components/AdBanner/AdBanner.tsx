import { styled } from 'styled-components';

const AdBanner = () => {
  return (
    <AdBannerContainer>
      <a href="https://www.wanted.co.kr/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          alt="광고 배너"
        />
        <h3>(광고) 모두가 나답게 일하고 즐겁게 성장할 수 있도록</h3>
      </a>
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

  @media (max-width: 768px) {
    h3 {
      display: none;
    }
  }
`;
