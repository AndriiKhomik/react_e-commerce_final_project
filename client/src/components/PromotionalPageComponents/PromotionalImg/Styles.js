import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledCardMediaBox = styled('div')(() => ({
  position: 'relative',
  [theme.breakpoints.up('xs')]: {
    marginBottom: '20px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    boxSizing: 'border-box',
    margin: '0',
  },
}));

export const StyledImageWrapper = styled(Box)`
  & img {
    width: 100%;
  }
`;
