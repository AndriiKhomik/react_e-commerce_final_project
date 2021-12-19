import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledCardMediaWrapper = styled('div')(() => ({
  position: 'relative',
  minHeight: '170px',
  width: '100%',
  height: '100%',
  // marginBottom: '20px',
}));

export const StyledCardMediaBox = styled('div')`
  display: block;
  overflow: hidden;
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  margin: 0;
`;

export const StyledCardMedia = styled('img')(() => ({
  position: 'absolute',
  top: '0',
  inset: '0',
  padding: '0',
  borderRadius: '4px',
  margin: 'auto',
  display: 'block',
  width: '0',
  height: '0',
  minWidth: '100%',
  maxWidth: '100%',
  minHeight: '100%',
  maxHeight: '100%',
  objectFit: 'scale-down',
  // objectPosition: 'center bottom',
  [theme.breakpoints.up('ds')]: {
    objectFit: 'cover',
  },
  // [theme.breakpoints.up('530')]: {
  //   objectFit: 'cover',
  // },
  // [theme.breakpoints.up('sm')]: {
  //   objectFit: 'scale-down',
  // },
  // [theme.breakpoints.up('bm')]: {
  //   objectFit: 'cover',
  // },
  // [theme.breakpoints.up('dl')]: {
  //   objectFit: 'cover',
  // },
}));
