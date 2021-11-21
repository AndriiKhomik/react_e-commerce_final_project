import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCartButton = styled(Button)`
  min-width: inherit;
  padding: 10px 9px;
  grid-area: cart;
  align-self: end;
  background-color: #ffac0c;
  &:hover {
    background-color: #fd8502;
  }
`;
