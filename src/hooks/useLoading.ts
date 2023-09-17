import { useState } from 'react';

const useLoading = () => {
  const [initialLoading, setInitialLoading] = useState<boolean>(false);
  const [moreDataLoading, setMoreDataLoading] = useState<boolean>(false);

  return { initialLoading, setInitialLoading, moreDataLoading, setMoreDataLoading };
};

export default useLoading;
