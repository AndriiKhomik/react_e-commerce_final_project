import { Button, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledButtonsWrapper = styled('div')`
  display: flex;
`;

export const StyledCartButton = styled(Button)`
  padding: 10px 20px;
  background-color: #ffac0c;
  &:hover {
    background-color: #fd8502;
  }
`;

export const StyledButtonText = styled('p')`
  color: #fff;
`;

export const StyledFavoriteBtnBox = styled(CardActions)`
  padding: 0;
  background-color: #ffffff;
  border-radius: 4px;
  margin-left: 10px;
`;

export const StyledFavoriteBtn = styled(Button)`
  min-width: inherit;
  padding: 8px;
  color: ${theme.palette.primary.main};
  border: 1px solid ${theme.palette.primary.main};
  &:hover {
    color: #fd8502;
    border: 1px solid #fd8502;
  }
`;
