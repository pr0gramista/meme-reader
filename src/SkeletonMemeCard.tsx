import { Box, Skeleton } from '@mantine/core';

const SkeletonMemeCard = () => {
  return (
    <Box sx={{ marginBottom: 12 }}>
      <Skeleton height={24} mb={12} mt={4} />
      <Skeleton height={600} mb={8} />
    </Box>
  );
};

export default SkeletonMemeCard;
