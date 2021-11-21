import { Box, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTextField = styled(TextField)(() => ({
  [theme.breakpoints.up('xs')]: {
    width: '65%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '65%',
  },
  [theme.breakpoints.up('dm')]: {
    width: '70%',
  },
  [theme.breakpoints.up('md')]: {
    width: '75%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '85%',
  },
}));

export const StyledBox = styled(Box)(() => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export const StyledTitle = styled('h3')(() => ({
  [theme.breakpoints.up('xs')]: {
    color: '#000',
    paddingBottom: '18px',
    paddingTop: '18px',
    fontSize: '18px',
    lineHeight: '16px',
    fontFamily: 'CeraPro Bold',
  },
  [theme.breakpoints.up('sm')]: {
    paddingTop: '0',
  },
}));

export const StyledText = styled('span')(() => ({
  color: '#727272',
  paddingTop: '17px',
  fontSize: '13px',
  lineHeight: '22px',
  fontFamily: 'CeraPro Regular',
}));
