import {
  ListItem,
  CardActions,
  Link,
  Button,
  Typography,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: '0',
  [theme.breakpoints.up('md')]: {
    position: 'relative',
  },
}));

export const StyledLink = styled(Link)`
  width: 100%;
`;

export const StyledSaleParagraph = styled(Typography)`
  position: absolute;
  top: 14px;
  left: 0;
  padding: 8px 16px;
  background-color: #f8a300;
  font-size: 16px;
  line-height: 1;
  color: #3d3d3d;
  border-radius: 1px;
`;

export const StyledPriceBox = styled(Box)`
  display: flex;
`;

export const StyledCartButton = styled(Button)`
  min-width: inherit;
  padding: 10px 11px;
  background-color: #ffac0c;
  &:hover {
    background-color: #fd8502;
  }
`;

export const StyledFavouriteBtnBox = styled(CardActions)`
  position: absolute;
  z-index: 2;
  top: 8px;
  right: 8px;
  background-color: #ffffff;
  border-radius: 4px;
`;
export const StyledFavouriteBtn = styled(Button)`
  min-width: inherit;
  padding: 0;
  color: #f8a300;
`;
