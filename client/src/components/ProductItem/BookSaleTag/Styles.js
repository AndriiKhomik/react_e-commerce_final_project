import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledSaleParagraph = styled('p')(() => ({
  position: 'absolute',
  zIndex: '2',
  top: '10px',
  left: '0',
  padding: '6px 16px',
  backgroundColor: '#f8a300',
  fontSize: '16px',
  lineHeight: '1',
  color: '#3d3d3d',
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
  [theme.breakpoints.up('dm')]: {
    padding: '8px 20px',
    top: '13px',
  },
  [theme.breakpoints.up('dl')]: {
    padding: '6px 16px',
  },
}));
