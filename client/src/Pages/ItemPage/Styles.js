import { styled } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
import theme from '../../services/theme/theme';

export const StyledContainer = styled(Container)(() => ({
  [theme.breakpoints.up('xs')]: {
    marginBottom: '50px',
    marginTop: '40px',
    display: 'flex',
  },
  [theme.breakpoints.up('sm')]: {
    marginBottom: '50px',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '60px',
  },
  [theme.breakpoints.up('lg')]: {},
}));

export const StyledDescription = styled(Grid)(() => ({
  [theme.breakpoints.up('xs')]: {
    alignItems: 'center',
    marginLeft: '10%',
    width: '50%',
  },
  [theme.breakpoints.up('sm')]: {},
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('lg')]: {},
}));
