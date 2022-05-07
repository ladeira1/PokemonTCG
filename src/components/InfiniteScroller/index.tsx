import { useAppSelector } from 'hooks/useAppSelector';
import React, { ReactNode, useEffect, useRef } from 'react';
import styles from './InfiniteScroller.module.scss';

interface InfiniteScrollerProps {
  onEndReached: () => void;
  children: ReactNode;
}

export const InfiniteScroller = ({
  onEndReached,
  children,
}: InfiniteScrollerProps) => {
  const { shouldFetchMoreData } = useAppSelector(state => state.pokemon);
  const loader = useRef(null);
  let isFetching = false;

  const handleObserver = (entries: any) => {
    const target = entries[0];

    if (target.isIntersecting && !isFetching && shouldFetchMoreData) {
      isFetching = true;
      onEndReached();
      setTimeout(() => {
        isFetching = false;
      }, 300);
    }
  };

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
      <div ref={loader} />
    </div>
  );
};
