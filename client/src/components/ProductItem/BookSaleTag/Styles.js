import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledSaleParagraph = styled('p')(() => ({
  position: 'absolute',
  zIndex: '2',
  top: '10px',
  left: '0',
  padding: '6px 16px',
  backgroundColor: [theme.palette.primary.dark],
  fontSize: '16px',
  lineHeight: '1',
  color: [theme.palette.text.main],
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
}));
