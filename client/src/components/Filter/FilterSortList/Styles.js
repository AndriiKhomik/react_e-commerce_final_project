import { styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledTagsList = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('ds')]: {
    marginBottom: '0',
    marginRight: '20px',
  },
  [theme.breakpoints.down('ds')]: {
    display: 'none',
  },
}));

export const StyledTagsItem = styled('li')(() => ({
  fontSize: '15px',
  textDecoration: 'none',
  '&:not(:last-child)': {
    marginRight: '38px',
  },
  [theme.breakpoints.up('ds')]: {
    '&:not(:last-child)': {
      marginRight: '15px',
    },
  },

  [theme.breakpoints.up('dm')]: {
    '&:not(:last-child)': {
      marginRight: '38px',
    },
  },
}));

export const StyledLink = styled('p')(() => ({
  padding: '0',
  cursor: 'pointer',
  textDecoration: 'none',
  transition: '0.3s linear',
  '&:hover': {
    color: [theme.palette.primary.main],
    textDecoration: 'underline',
  },
}));
