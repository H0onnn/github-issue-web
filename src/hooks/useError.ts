import { useState } from 'react';

const useError = () => {
  const [error, setError] = useState<null | { message: string; code?: number }>(null);
  const [isError, setIsError] = useState<boolean>(false);

  return { error, setError, isError, setIsError };
};

export default useError;
