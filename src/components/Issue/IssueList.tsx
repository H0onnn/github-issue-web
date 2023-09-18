import React, { useCallback } from 'react';
import { useIssueData } from '../../hooks/useIssueData';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import IssueItem from './IssueItem';
import AdBanner from '../AdBanner/AdBanner';
import SkeletonComponent from '../UI/Loading/SkeletonComponent';

const IssueList: React.FC = () => {
  const { issues, moreDataLoading, loadMoreIssues, hasMore } = useIssueData();

  const fetchMoreData = useCallback(() => {
    if (hasMore) {
      loadMoreIssues();
    }
  }, [hasMore, loadMoreIssues]);

  const [isFetching, observer] = useInfiniteScroll(fetchMoreData);

  const lastIssueRef = (node: HTMLDivElement) => {
    if (moreDataLoading) return;
    if (observer && node) observer.observe(node);
  };

  return (
    <div>
      {issues.map((issue, index) => (
        <div key={issue.id} ref={index === issues.length - 1 ? lastIssueRef : undefined}>
          {index % 4 === 0 && index !== 0 && <AdBanner />}
          <IssueItem issue={issue} />
        </div>
      ))}
      {moreDataLoading && <SkeletonComponent />}
    </div>
  );
};

export default IssueList;
