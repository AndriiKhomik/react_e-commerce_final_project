import { styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledList = styled('ul')(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: '50px',
  marginBottom: '45px',

  [theme.breakpoints.up('xs')]: {
    justifyContent: 'center',
    columnGap: '30px',
  },
  [theme.breakpoints.up('sm')]: {
    // gridTemplateColumns: 'repeat(auto-fill, 550px)',
    justifyContent: 'space-between',
    columnGap: '30px',
  },
  [theme.breakpoints.up('dm')]: {
    // gridTemplateColumns: 'repeat(auto-fill, 600px)',
    justifyContent: 'start',
    columnGap: '20px',
  },
  [theme.breakpoints.up('bm')]: {
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'space-between',
    columnGap: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    columnGap: '20px',
    // gridTemplateColumns: 'repeat(auto-fill, 550px)',
  },
}));
