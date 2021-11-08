import { ListItem, ListItemIcon, Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledAddress = styled('address')`
  font-style: normal;
  color: #3d3d3d;
`;

export const StyledItem = styled(ListItem)`
  width: inherit;
  padding: 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #3d3d3d;
  transition: 0.3s linear;
  &:hover {
    color: #ffac0c;
  }
`;

export const StyledListIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: '0',
  marginRight: '4px',
  [theme.breakpoints.up('sm')]: {
    marginRight: '10px',
  },
}));
