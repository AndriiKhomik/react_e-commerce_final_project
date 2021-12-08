/* eslint-disable prettier/prettier */
import { Link, List } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '../../services/theme/theme';

export const StyledList = styled(List)(() => ({
  display: 'flex',
  marginBottom: '36px',
  [theme.breakpoints.up('xs')]: {
    marginBottom: '5px',
  },
  [theme.breakpoints.up('sm')]: {
    marginBottom: '15px',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '20px',
  },
}));

export const StyledItem = styled('li')(() => ({
  '&:not(:last-child)': {
    marginRight: '21px',
    ' &::after': {
      content: '"/"',
      position: 'absolute',
      marginLeft: '7px',
    },
  },
  [theme.breakpoints.up('xs')]: {
    marginBottom: '5px',
  },
  [theme.breakpoints.up('sm')]: {
    marginBottom: '15px',
  },
  [theme.breakpoints.up('md')]: {
    marginBottom: '20px',
  },
}));

export const StyledLink = styled(Link)(() => ({
  fontSize: '13px',
  color: [theme.palette.text.main],
  textDecoration: 'none',
  transition: '0.3s linear',
  '&:hover': {
    color: [theme.palette.primary.main],
    textDecoration: 'underline',
  },
  [theme.breakpoints.up('ds')]: {
    fontSize: '16px',
  },
}));

export const StyledCurrentPage = styled('p')(() => ({
  fontSize: '13px',
  color: [theme.palette.text.main],
  textDecoration: 'none',
  [theme.breakpoints.up('ds')]: {
    fontSize: '16px',
  },
}));
