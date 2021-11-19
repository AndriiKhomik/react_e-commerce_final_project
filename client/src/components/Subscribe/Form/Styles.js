import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledBox = styled(Box)(() => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  //   [theme.breakpoints.up('dm')]: {},
}));

export const StyledTitle = styled('h3')(() => ({
  color: '#000',
  paddingBottom: '18px',
  fontSize: '18px',
  lineHeight: '16px',
  fontFamily: 'CeraPro Bold',
}));

export const StyledText = styled('span')(() => ({
  color: '#727272',
  paddingTop: '17px',
  fontSize: '13px',
  lineHeight: '22px',
  fontFamily: 'CeraPro Regular',
}));
