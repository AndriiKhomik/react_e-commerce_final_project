import { CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledFavouriteBtnBox = styled(CardActions)`
  position: absolute;
  padding: 0;
  z-index: 2;
  top: 8px;
  right: 8px;
  background-color: ${[theme.palette.text.light]};
  border-radius: 4px;
`;

export const StyledFavouriteBtn = styled(Button)`
  min-width: inherit;
  padding: 8px;
  color: ${[theme.palette.primary.dark]};
  &:hover {
    background-color: ${[theme.palette.text.light]};
  }
`;
