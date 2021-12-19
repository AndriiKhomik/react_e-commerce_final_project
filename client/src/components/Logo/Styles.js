import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

export const StyledBox = styled(Box)`
  display: flex;
  margin-right: 95px;
`;

export const StyledLink = styled('a')`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const StyledLogoText = styled('span')(() => ({
  [theme.breakpoints.up('ds')]: {
    display: 'block',
  },
  color: '#f8a300',
  textTransform: 'uppercase',
  fontWeight: '700',
  marginLeft: '10px',
  display: 'none',
}));
