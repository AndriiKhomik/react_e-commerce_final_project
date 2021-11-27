import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledTitle = styled('h3')(() => ({
  color: '#3d3d3d',
  paddingTop: '18px',
  paddingBottom: '9px',
  fontFamily: 'CeraPro Bold',
  [theme.breakpoints.up('sm')]: {
    fontSize: '14px',
    lineHeight: '14px',
  },
  [theme.breakpoints.up('dl')]: {
    fontSize: '17px',
    lineHeight: '16px',
  },
}));

export const StyledText = styled('span')(() => ({
  color: '#727272',
  fontFamily: 'CeraPro Regular',
  [theme.breakpoints.up('sm')]: {
    fontSize: '12px',
    lineHeight: '11px',
  },
  [theme.breakpoints.up('dl')]: {
    fontSize: '14px',
    lineHeight: '22px',
  },
}));

export const StyledBox = styled(Box)(() => ({
  paddingRight: '25px',
  [theme.breakpoints.up('dl')]: {
    paddingRight: '55px',
  },
}));
