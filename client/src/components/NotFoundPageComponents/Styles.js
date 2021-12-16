import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import theme from '../../services/theme/theme';

export const StyledNotFoundWrapper = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px 0',
  },
  [theme.breakpoints.up('md')]: {},
  [theme.breakpoints.up('ds')]: {
    padding: '80px 0',
  },
}));

export const StyledNotFoundTitle = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '50px',
    fontWeight: 'bold',
    color: `${theme.palette.primary.dark}`,
  },

  [theme.breakpoints.up('ds')]: {
    fontSize: '200px',
  },
}));

export const StyledNotFoundSubtitle = styled('p')(() => ({
  [theme.breakpoints.up('xs')]: {
    fontSize: '25px',
    color: `${theme.palette.text.main}`,
    fontWeight: 'bold',
    paddingTop: '10px',
  },

  [theme.breakpoints.up('ds')]: {
    fontSize: '50px',
    paddingTop: '20px',
  },
}));

export const StyledLink = styled(Link)(() => ({
  [theme.breakpoints.up('xs')]: {
    marginTop: '20px',
    padding: '10px 30px',
    color: `${theme.palette.primary.dark}`,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    '&:hover': {
      color: `${theme.palette.primary.deepdark}`,
      border: `1px solid ${theme.palette.primary.deepdark}`,
    },
  },
  [theme.breakpoints.up('ds')]: {},
}));
