import { ListItem, Drawer } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledLink = styled(NavLink)(() => ({
  textDecoration: 'none',
  marginRight: '10px',
  color: `${theme.palette.text.main}`,
  '&.selected': {
    color: `${theme.palette.primary.main}`,
  },
}));

export const StyledListItem = styled(ListItem)`
  width: 50vw;
  justify-content: center;
`;

export const StyledDrawer = styled(Drawer)`
  & .css-1ctmqsh-MuiPaper-root-MuiDrawer-paper {
    background-color: ${theme.palette.background.grayBc};
  }
`;
