import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledCartButton = styled(Button)`
  min-width: inherit;
  padding: 10px 9px;
  grid-area: cart;
  align-self: end;
  background-color: ${[theme.palette.primary.main]};
  &:hover {
    background-color: ${[theme.palette.primary.deepdark]};
  }
`;
