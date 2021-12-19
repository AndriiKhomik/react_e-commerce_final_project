import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledText = styled('span')(() => ({
  position: 'absolute',
  bottom: '200px',
  left: '30px',
  padding: '12px',
  borderRadius: '4px',
  backgroundColor: `${theme.palette.primary.main}`,
  color: `${theme.palette.text.light}`,
  fontWeight: 700,
  zIndex: 2,
}));
