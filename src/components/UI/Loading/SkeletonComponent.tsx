import SkeletonItem from './SkeletonItem';

const SkeletonComponent: React.FC = () => {
  return (
    <div>
      {Array.from({ length: NUMBER_OF_SKELETONS }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
};

export default SkeletonComponent;

const NUMBER_OF_SKELETONS = 5;
