import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledBox = styled(Box)(() => ({
  backgroundColor: '#fbfbfb;',
  paddingLeft: '25px',
  paddingRight: '25px',
  paddingBottom: '24px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    fontFamily: 'CeraPro Regular',
  },
}));
