import { styled, Grid, Box } from '@mui/material';
import theme from '../../services/theme/theme';

export const StyledUpperWrapper = styled(Grid)(() => ({
  marginBottom: '36px',
}));

export const StyledBtnBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.up('ds')]: {
    justifyContent: 'start',
  },
}));
