import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTitle = styled('h3')(() => ({
  color: '#000',
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
