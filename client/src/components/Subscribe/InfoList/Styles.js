import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
  paddingTop: '30px',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    fontFamily: 'CeraPro Regular',
    paddingRight: '10px',
  },
}));
