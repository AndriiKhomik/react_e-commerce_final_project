import { styled } from '@mui/material/styles';
import theme from '../../../../services/theme/theme';

export const StyledFormatParagraph = styled('p')(() => ({
  position: 'absolute',
  zIndex: '2',
  bottom: '15px',
  right: '8px',
  padding: '10px',
  fontSize: '3,5rem',
  backgroundColor: [theme.palette.text.light],
  color: [theme.palette.primary.dark],
  borderRadius: '4px',
}));
