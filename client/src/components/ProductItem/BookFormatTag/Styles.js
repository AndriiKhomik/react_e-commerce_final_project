import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledFormatParagraph = styled('p')(() => ({
  opacity: '0',
  position: 'absolute',
  zIndex: '2',
  bottom: '15px',
  right: '8px',
  padding: '5px',
  backgroundColor: [theme.palette.text.light],
  color: [theme.palette.primary.dark],
  borderRadius: '4px',
}));
