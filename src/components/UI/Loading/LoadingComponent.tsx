import { styled } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const LoadingComponent = () => {
  return (
    <>
      <LoadingContainer>
        <FaSpinner className="spinner" />
        <span>Loading...</span>
      </LoadingContainer>
    </>
  );
};

export default LoadingComponent;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 16px;

  .spinner {
    margin-right: 10px;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
