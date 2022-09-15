import { Box, Button, Grid } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { sitesLinks } from './Sites';

const Initial = () => {
  const navigate = useNavigate();

  const links = sitesLinks.map((link) => (
    <Grid.Col span={6} key={link.label}>
      <Button
        fullWidth
        size="xl"
        variant="light"
        color={link.color}
        onClick={() => navigate(link.path)}
      >
        {link.label}
      </Button>
    </Grid.Col>
  ));

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <Box sx={{ maxWidth: 600, margin: 'auto', paddingBottom: 50 }}>
        <Grid>{links}</Grid>
      </Box>
    </Box>
  );
};

export default Initial;
