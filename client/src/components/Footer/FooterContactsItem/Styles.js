import { ListItem, ListItemIcon, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledAddress = styled('address')(() => ({
  fontStyle: 'normal',
  color: [theme.palette.text.main],
}));

export const StyledItem = styled(ListItem)`
  width: inherit;
  padding: 0;
`;

export const StyledLink = styled(Link)(() => ({
  textDecoration: 'none',
  color: [theme.palette.text.main],
  transition: '0.3s linear',
  '&:hover': {
    color: [theme.palette.primary.main],
  },
}));

export const StyledListIcon = styled(ListItemIcon)(() => ({
  minWidth: '0',
  marginRight: '4px',
  [theme.breakpoints.up('sm')]: {
    marginRight: '10px',
  },
}));
