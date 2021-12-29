import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import theme from '../../services/theme/theme';

export const StyledContainer = styled(Container)(() => ({
  [theme.breakpoints.up('xs')]: {
    fontFamily: 'CeraPro Regular',
  },
}));

export const StyledError = styled('h3')(() => ({
  textAlign: 'center',
  marginTop: '76px',
  fontSize: '24px',
  fontFamily: 'CeraPro Bold',
  span: {
    display: 'block',
    fontSize: '16px',
    marginTop: '24px',
    fontFamily: 'CeraPro Regular',
    color: `${theme.palette.primary.main}`,
  },
}));
