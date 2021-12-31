/* eslint-disable prettier/prettier */
import { Button, styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledButton = styled(Button)(() => ({
  padding: '8px 22px',
  color: [theme.palette.text.light],
  fontSize: '16px',
  fontWeight: '700',
  boxShadow: 'none',
  textTransform: 'capitalize',
  '&:hover': {
    color: [theme.palette.text.light],
    backgroundColor: [theme.palette.primary.deepdark],
    boxShadow: 'none',
  },
}));
