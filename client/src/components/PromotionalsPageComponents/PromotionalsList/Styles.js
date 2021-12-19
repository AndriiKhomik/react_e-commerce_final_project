import { styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledList = styled('ul')(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: '50px',
  marginBottom: '45px',

  [theme.breakpoints.up('xs')]: {
    justifyContent: 'center',
    columnGap: '40px',
  },
  [theme.breakpoints.up('sm')]: {
    // gridTemplateColumns: 'repeat(auto-fill, 550px)',
    justifyContent: 'space-between',
    columnGap: '50px',
  },
  [theme.breakpoints.up('dm')]: {
    // gridTemplateColumns: 'repeat(auto-fill, 600px)',
    justifyContent: 'start',
    columnGap: '50px',
  },
  [theme.breakpoints.up('bm')]: {
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'space-between',
    columnGap: '60px',
  },
  [theme.breakpoints.up('lg')]: {
    columnGap: '60px',
    // gridTemplateColumns: 'repeat(auto-fill, 550px)',
  },
}));
