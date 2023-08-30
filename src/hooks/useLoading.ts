import { useState } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('Loading...');

  return { loading, setLoading, loadingMessage, setLoadingMessage };
};

export default useLoading;
