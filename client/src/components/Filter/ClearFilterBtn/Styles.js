/* eslint-disable prettier/prettier */
import { Button, styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledButton = styled(Button)(() => ({
  padding: '8px 12px',
  color: [theme.palette.primary.deepdark],
  border: `1px solid ${[theme.palette.primary.deepdark]}`,
  fontSize: '16px',
  fontWeight: '700',
  boxShadow: 'none',
  textTransform: 'capitalize',
  marginLeft: '15px',
  '&:hover': {
    color: [theme.palette.text.light],
    backgroundColor: [theme.palette.primary.deepdark],
    border: `1px solid ${[theme.palette.primary.deepdark]}`,
    boxShadow: 'none',
  },
  [theme.breakpoints.down('dm')]: {
    width: '50px',
    height: '45px',
    minWidth: 'auto',
  },
}));
