import { useState } from 'react';

const useError = () => {
  const [isError, setIsError] = useState<boolean>(false);

  return { isError, setIsError };
};

export default useError;
