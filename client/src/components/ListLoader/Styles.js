import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

export const StyledLoaderBox = styled(Box)`
  display: flex;
  justify-content: center;
  color: ${theme.palette.primary.dark};
  margin: 30px 0;
`;
