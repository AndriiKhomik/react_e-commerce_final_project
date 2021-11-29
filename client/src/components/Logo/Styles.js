import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

export const StyledLogoText = styled('span')(() => ({
  color: [theme.palette.primary.dark],
  textTransform: 'uppercase',
  fontWeight: '700',
}));

export const StyledBox = styled(Box)`
  display: flex;
  margin-right: 20px;
`;

export const StyledLink = styled('a')`
  text-decoration: none;
`;
