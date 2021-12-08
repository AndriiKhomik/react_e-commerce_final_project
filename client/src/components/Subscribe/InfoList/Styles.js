import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
  // paddingTop: '20px',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('dm')]: {
    display: 'flex',
    fontFamily: 'CeraPro Regular',
    paddingRight: '10px',
  },
}));

// xs: 0,
// sr: 380,
// ds: 477,
// sm: 600,
// dm: 715,
// bm: 790,
// md: 900,
// dl: 1100,
// lg: 1200,
// xl: 1536,
// },
