import { ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledLink = styled('a')(() => ({
  textDecoration: 'none',
  marginRight: '10px',
  color: `${theme.palette.text.main}`,
}));

export const StyledListItem = styled(ListItem)`
  width: 50vw;
  justify-content: center;
`;
