import { styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledList = styled('ul')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 750px)',
  rowGap: '50px',
  marginBottom: '45px',

  [theme.breakpoints.up('xs')]: {
    justifyContent: 'center',
    columnGap: '70px',
  },
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-between',
    columnGap: '30px',
  },
  [theme.breakpoints.up('dm')]: {
    justifyContent: 'start',
    columnGap: '70px',
  },
  [theme.breakpoints.up('bm')]: {
    justifyContent: 'space-between',
    columnGap: '30px',
  },
  [theme.breakpoints.up('lg')]: {
    columnGap: '20px',
  },
}));
