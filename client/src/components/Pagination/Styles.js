import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import theme from '../../services/theme/theme';

export const StyledStack = styled(Stack)`
  margin-bottom: 60px;
  align-items: flex-end;
  & .MuiPaginationItem-outlined {
    border-color: ${[theme.palette.primary.main]};
  }
  & .MuiPaginationItem-outlined:hover {
    background-color: ${[theme.palette.primary.light]};
  }
  & .css-c1alij-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected,
  .Mui-selected {
    background-color: ${[theme.palette.primary.main]};
    color: ${[theme.palette.text.light]};
  }

  & .css-c1alij-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover {
    background-color: ${[theme.palette.primary.main]};
  }
`;
