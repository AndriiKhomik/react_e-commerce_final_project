import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    fontFamily: 'CeraPro Regular',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('dm')]: {},
  [theme.breakpoints.up('lg')]: {
    justifyContent: 'space-around',
  },
}));
