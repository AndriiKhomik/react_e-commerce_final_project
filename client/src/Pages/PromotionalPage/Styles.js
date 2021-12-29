import { styled } from '@mui/material/styles';
import { Box, Grid } from '@mui/material';
import theme from '../../services/theme/theme';

export const StyledContainer = styled(Box)(() => ({
  [theme.breakpoints.up('xs')]: {
    marginBottom: '20px',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
  },
  [theme.breakpoints.up('sm')]: {
    marginBottom: '25px',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '35px',
  },
}));

export const StyledDescription = styled(Grid)(() => ({
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    marginLeft: '0%',
    width: '100%',
  },
}));
