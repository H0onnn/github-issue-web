import { useEffect, useRef, useState } from 'react';

const useInfiniteScroll = (callback: () => void): [boolean, IntersectionObserver | null] => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const handleIntersect = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) setIsFetching(true);
    };

    observer.current = new IntersectionObserver(handleIntersect);
    return () => observer.current?.disconnect();
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    callback();
    setIsFetching(false);
  }, [isFetching]);

  return [isFetching, observer.current];
};

export default useInfiniteScroll;
