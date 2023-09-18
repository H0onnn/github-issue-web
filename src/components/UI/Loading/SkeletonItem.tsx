import styled, { keyframes } from 'styled-components';
import { colors } from '../../../constants/colors';

const SkeletonItem: React.FC = () => {
  return (
    <SkeletonLayout>
      <SkeletonHeaderContainer>
        <SkeletonTitleContainer>
          <SkeletonSpan width="50px"></SkeletonSpan>
          <SkeletonSpan width="100%"></SkeletonSpan>
        </SkeletonTitleContainer>
        <RightSkeletonContent>
          <SkeletonSpan width="70px"></SkeletonSpan>
        </RightSkeletonContent>
      </SkeletonHeaderContainer>
      <SkeletonDetailsContainer>
        <SkeletonSpan width="70px"></SkeletonSpan>
        <SkeletonSpan width="100px"></SkeletonSpan>
      </SkeletonDetailsContainer>
    </SkeletonLayout>
  );
};

export default SkeletonItem;

const loadingAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonLayout = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  width: 100%;
`;

const SkeletonHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SkeletonTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  max-width: calc(100% - 100px);
`;

const SkeletonDetailsContainer = styled.div`
  margin-top: 5px;
  display: flex;
  gap: 10px;
`;

const RightSkeletonContent = styled.div`
  display: flex;
  gap: 10px;
  width: 80px;
`;

const SkeletonSpan = styled.span<{ width: string }>`
  display: block;
  height: 1em;
  background: linear-gradient(90deg, ${colors.gray}, #f5f5f5, ${colors.gray});
  background-size: 200% 100%;
  animation: ${loadingAnimation} 1.5s infinite;
  width: ${props => props.width};
  border-radius: 4px;
`;
