import { styled } from '@mui/material/styles';
import { Container, Grid } from '@mui/material';
import theme from '../../services/theme/theme';

export const StyledContainer = styled(Container)(() => ({
  [theme.breakpoints.up('xs')]: {
    marginBottom: '50px',
    marginTop: '40px',
    display: 'flex',
    flexDirection: 'column',
  },
  [theme.breakpoints.up('sm')]: {
    marginBottom: '50px',
  },
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    marginBottom: '60px',
  },
}));

export const StyledDescription = styled(Grid)(() => ({
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    marginLeft: '10%',
    width: '50%',
  },
}));
