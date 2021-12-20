import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledCardMediaBox = styled('div')(() => ({
  position: 'relative',
  [theme.breakpoints.up('xs')]: {
    marginBottom: '15px',
  },
  [theme.breakpoints.up('md')]: {
    display: 'block',
    boxSizing: 'border-box',
  },
}));

export const StyledCardMedia = styled('img')(() => ({
  [theme.breakpoints.up('xs')]: {
    padding: '0',
    display: 'block',
    objectFit: 'cover',
    borderRadius: '5px',
    maxWidth: '100%',
  },
}));