import React, { ReactNode, useCallback, useEffect, useRef } from 'react';
import styles from './InfiniteScroller.module.scss';

interface InfiniteScrollerProps {
  onEndReached: () => void;
  isLoading?: boolean;
  children: ReactNode;
}

export const InfiniteScroller = ({
  onEndReached,
  isLoading = false,
  children,
}: InfiniteScrollerProps) => {
  const loader = useRef(null);
  let isFetching = false;

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0];

    if (target.isIntersecting && !isFetching) {
      isFetching = true;
      onEndReached();
      setTimeout(() => {
        isFetching = false;
      }, 300);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '2px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);

    if (loader.current) observer.observe(loader.current);

    return () => observer.disconnect();
  }, [handleObserver]);

  return (
    <div className={styles.container}>
      <div className={styles.container}>{children}</div>
      {isLoading && <p>Loading...</p>}
      <div ref={loader} className="a" />
    </div>
  );
};
