import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledCardMediaBox = styled('div')(() => ({
  [theme.breakpoints.up('xs')]: {
    marginBottom: '20px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    boxSizing: 'border-box',
    margin: '0',
  },
}));

export const StyledCardMedia = styled('img')(() => ({
  [theme.breakpoints.up('xs')]: {
    height: '500px',
    padding: '0',
    margin: 'auto',
    display: 'block',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  [theme.breakpoints.up('md')]: {},
}));
