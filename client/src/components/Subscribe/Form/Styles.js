import { Box, Button } from '@mui/material';
import { Field, ErrorMessage, Form } from 'formik';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTextField = styled(Field)(() => ({
  borderRadius: '4px',
  outline: 'none',
  fontFamily: 'CeraPro Regular',
  color: [theme.palette.text.main],
  fontSize: '14px',
  padding: '10px',
  width: '100%',
  border: `1px solid ${[theme.palette.text.gray]}`,
}));

export const StyledButton = styled(Button)(() => ({
  [theme.breakpoints.up('xs')]: {
    borderBottomLeftRadius: '0',
    borderTopLeftRadius: '0',
    boxShadow: 'none',
    paddingTop: '8px',
    paddingBottom: '8px',
    textTransform: 'capitalize',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
  },
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: [theme.palette.primary.deepdark],
  },
}));

export const StyledBox = styled(Box)(() => ({
  position: 'relative',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));

export const StyledForm = styled(Form)(() => ({
  position: 'relative',
  display: 'flex',
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('ds')]: {
    width: '60%',
  },
  [theme.breakpoints.up('dm')]: {
    width: '100%',
  },
}));

export const StyledTitle = styled('h3')(() => ({
  [theme.breakpoints.up('xs')]: {
    color: `${theme.palette.text.main}`,
    paddingBottom: '18px',
    paddingTop: '18px',
    fontSize: '16px',
    lineHeight: '18px',
    fontFamily: 'CeraPro Bold',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '18px',
    lineHeight: '24px',
  },
}));

export const StyledText = styled('p')(() => ({
  color: `${theme.palette.text.primary}`,
  paddingTop: '20px',
  fontSize: '13px',
  lineHeight: '22px',
  fontFamily: 'CeraPro Regular',
  [theme.breakpoints.down('dm')]: {
    maxWidth: '70%',
  },
  [theme.breakpoints.down('ds')]: {
    maxWidth: '100%',
  },
}));

export const StyledErrorMessage = styled(ErrorMessage)(() => ({
  position: 'absolute',
  bottom: '-18px',
  fontSize: '13px',
  color: [theme.palette.primary.accent],
}));