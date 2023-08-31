import styled from 'styled-components';
import Button from '../Button';

interface ErrorComponentProps {
  error: {
    message?: string;
    code?: number;
  };
}

const ErrorComponent = ({ error }: ErrorComponentProps) => {
  return (
    <ErrorLayout>
      <ErrorCode>{error.code}</ErrorCode>
      <ErrorMessage>{error.message}</ErrorMessage>
      <Button onClick={() => window.location.reload()}>다시 시도</Button>
    </ErrorLayout>
  );
};

export default ErrorComponent;

const ErrorLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: calc(100% - 40px);
  padding: 20px;
  box-sizing: border-box;
`;

const ErrorCode = styled.span`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 16px;
`;

const ErrorMessage = styled.span`
  font-size: 24px;
  margin-bottom: 24px;
`;
