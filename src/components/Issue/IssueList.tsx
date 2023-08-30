import React, { useRef, useEffect, useCallback } from 'react';
import { useIssueData } from '../../hooks/useIssueData';
import IssueItem from './IssueItem';
import AdBanner from '../AdBanner/AdBanner';
import { styled } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const IssueList: React.FC = () => {
  const { issues, loading, loadMoreIssues, hasMore } = useIssueData();

  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastIssueRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observerRef.current) observerRef.current.disconnect();

      observerRef.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreIssues();
        }
      });

      if (node) observerRef.current.observe(node);
    },
    [loading, hasMore, loadMoreIssues],
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div>
      {issues.map((issue, index) => (
        <div key={issue.id} ref={index === issues.length - 1 ? lastIssueRef : undefined}>
          {index % 4 === 0 && index !== 0 && <AdBanner />}
          <IssueItem issue={issue} />
        </div>
      ))}
      {loading && (
        <LoadingContainer>
          <FaSpinner className="spinner" />
          <span>Loading...</span>
        </LoadingContainer>
      )}
    </div>
  );
};

export default IssueList;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 16px;

  .spinner {
    margin-right: 10px;
    animation: spin 1s infinite linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
