import { Button, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledButtonsWrapper = styled('div')`
  display: flex;
`;

export const StyledCartButton = styled(Button)`
  padding: 10px 20px;
  background-color: ${theme.palette.primary.main};
  &:hover {
    background-color: ${theme.palette.primary.deepdark};
  }
`;

export const StyledButtonText = styled('p')`
  color: ${theme.palette.text.light};
`;

export const StyledFavoriteBtnBox = styled(CardActions)`
  padding: 0;
  background-color: ${theme.palette.text.light};
  border-radius: 4px;
  margin-left: 10px;
`;

export const StyledFavoriteBtn = styled(Button)`
  min-width: inherit;
  padding: 8px;
  color: ${theme.palette.primary.main};
  border: 1px solid ${theme.palette.primary.main};
  &:hover {
    color: ${theme.palette.primary.deepdark};
    border: 1px solid ${theme.palette.primary.deepdark};
  }
`;
