import { CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFavouriteBtnBox = styled(CardActions)`
  position: absolute;
  padding: 0;
  z-index: 2;
  top: 15px;
  right: 8px;
  background-color: #ffffff;
  border-radius: 4px;
`;

export const StyledFavouriteBtn = styled(Button)`
  min-width: inherit;
  padding: 8px;
  color: #f8a300;
  &:hover {
    background-color: #ffffff;
  }
`;
