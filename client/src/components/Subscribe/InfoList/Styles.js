import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    // fontSize: '14px',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('dm')]: {
    // fontSize: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-around',
    fontFamily: 'CeraPro Regular',
    // fontSize: '30px',
    // color: 'green',
  },
}));
