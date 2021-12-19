import { styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledList = styled('ul')(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  rowGap: '30px',
  marginBottom: '45px',

  [theme.breakpoints.up('xs')]: {
    justifyContent: 'center',
    columnGap: '40px',
  },

  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-between',
    columnGap: '50px',
  },
  [theme.breakpoints.up('dm')]: {
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'start',
    columnGap: '50px',
  },
  [theme.breakpoints.up('930')]: {
    justifyContent: 'space-between',
    columnGap: '60px',
    rowGap: '30px',
  },
  [theme.breakpoints.up('1000')]: {
    rowGap: '45px',
  },

  [theme.breakpoints.up('dl')]: {
    rowGap: '60px',
  },
  [theme.breakpoints.up('lg')]: {
    columnGap: '60px',
  },
}));
