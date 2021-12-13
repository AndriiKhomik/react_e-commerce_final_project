/* eslint-disable prettier/prettier */
import { styled } from '@mui/material';
import theme from '../../../services/theme/theme';

export const StyledTagsList = styled('ul')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '18px',
  [theme.breakpoints.up('ds')]: {
    marginBottom: '0',
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
  color: [theme.palette.text.main],
  textDecoration: 'none',
  transition: '0.3s linear',
  '&:hover': {
    color: [theme.palette.primary.main],
    textDecoration: 'underline',
  },
}));
