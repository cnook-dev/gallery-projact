import { useEffect } from 'react';

const useInfiniteScroll = (callback: () => void, hasMore: boolean) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 500 && hasMore) {
        callback();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [callback, hasMore]);
};

export default useInfiniteScroll;