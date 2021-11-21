import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    fontFamily: 'CeraPro Regular',
    paddingRight: '10px',
    // justifyContent: 'space-between',
    // width: '70%',
  },
  // [theme.breakpoints.up('dm')]: {},
  // [theme.breakpoints.up('lg')]: {
  //   // justifyContent: 'start',
  // },
}));
