import { styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledItem = styled('li')`
  position: relative;
`;

export const StyledList = styled('ul')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 163px)',
  rowGap: '50px',

  [theme.breakpoints.up('xs')]: {
    justifyContent: 'center',
    columnGap: '50px',
  },
  [theme.breakpoints.up('sm')]: {
    columnGap: '50px',
  },
  [theme.breakpoints.up('md')]: {
    columnGap: '70px',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-between',
    columnGap: '20px',
  },
}));
