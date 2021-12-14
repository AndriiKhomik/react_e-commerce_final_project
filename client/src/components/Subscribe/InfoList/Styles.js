import { List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledList = styled(List)(() => ({
  paddingTop: '20px',
  [theme.breakpoints.up('xs')]: {
    display: 'none',
  },
  [theme.breakpoints.up('dm')]: {
    display: 'flex',
    fontFamily: 'CeraPro Regular',
    paddingRight: '10px',
  },
}));
