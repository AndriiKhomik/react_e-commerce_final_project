import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import theme from '../../services/theme/theme';

export const StyledContainer = styled(Container)(() => ({
  [theme.breakpoints.up('xs')]: {
    fontFamily: 'CeraPro Regular',
  },
}));
