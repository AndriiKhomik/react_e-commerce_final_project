import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledCardMediaBox = styled('div')(() => ({
  position: 'relative',
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
    // height: '400px',
    padding: '0',
    // margin: 'auto',
    display: 'block',
    objectFit: 'cover',
    borderRadius: '5px',
    maxWidth: '100%',
  },
  // [theme.breakpoints.up('ds')]: {
  //   // height: '500px',
  //   maxWidth: '400px',
  // },
  // [theme.breakpoints.up('sm')]: {
  //   // height: '500px',
  //   maxWidth: '550px',
  // },
  // [theme.breakpoints.up('md')]: {
  //   // height: '500px',
  //   maxWidth: '700px',
  // },
}));
