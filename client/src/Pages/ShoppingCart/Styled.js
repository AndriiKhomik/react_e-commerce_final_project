import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '10px',
  padding: '36px 0',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '65% 30%',
    gap: '5%',
  },
}));
