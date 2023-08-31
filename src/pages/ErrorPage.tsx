import ErrorComponent from '../components/UI/Error/ErrorComponent';

interface ErrorPageProps {
  message?: string;
  code?: number;
}

const ErrorPage = ({ message, code }: ErrorPageProps) => {
  return (
    <div>
      <ErrorComponent error={{ message, code }} />
    </div>
  );
};

export default ErrorPage;
