import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
  '& :last-child': {
    fontWeight: 'bold',
  },
  '& span': {
    color: `${theme.palette.primary.main}`,
  },
}));

export const StyledSpan = styled(Box)(() => ({
  color: `${theme.palette.primary.main}`,
  fontSize: '12px',
  display: 'block',
  textAlign: 'right',
  marginTop: '-10px',
  cursor: 'pointer',
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: `${theme.palette.primary.main}`,
  width: '100%',
  color: `${theme.palette.text.light}`,
  marginTop: '30px',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: `${theme.palette.primary.deepdark}`,
  },
}));

export const StyledContinueButton = styled(Button)(() => ({
  color: `${theme.palette.primary.main}`,
  width: '100%',
  marginTop: '4px',
  textTransform: 'capitalize',
  '&:hover': {
    backgroundColor: 'transparent',
    textDecoration: 'underline',
  },
}));
