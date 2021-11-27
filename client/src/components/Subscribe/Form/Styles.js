import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTextField = styled(TextField)(() => ({
  '& fieldset': {
    borderBottomRightRadius: '0',
    borderTopRightRadius: '0',
    height: '98.5%',
  },
  [theme.breakpoints.up('xs')]: {
    width: '73%',
  },
  [theme.breakpoints.up('sm')]: {
    width: '84%',
  },
  [theme.breakpoints.up('dm')]: {
    width: '89%',
  },
  [theme.breakpoints.up('md')]: {
    width: '75%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '85%',
  },
}));

export const StyledButton = styled(Button)(() => ({
  [theme.breakpoints.up('xs')]: {
    borderBottomLeftRadius: '0',
    borderTopLeftRadius: '0',
    boxShadow: 'none',
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
    color: '#3d3d3d',
    paddingBottom: '18px',
    paddingTop: '18px',
    fontSize: '18px',
    lineHeight: '24px',
    fontFamily: 'CeraPro Bold',
  },
  [theme.breakpoints.up('md')]: {
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
