import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledTitle = styled('p')(() => ({
  marginBottom: '20px',
  fontWeight: '700',
  fontSize: '17px',
  lineHeight: '17px',
  color: [theme.palette.text.main],
}));
