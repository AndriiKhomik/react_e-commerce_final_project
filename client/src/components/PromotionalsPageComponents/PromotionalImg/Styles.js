import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledCardMediaWrapper = styled('div')(() => ({
  position: 'relative',
  minHeight: '163px',
  width: '100%',
  height: '100%',
  [theme.breakpoints.up('sr')]: {
    minHeight: '216px',
  },
  [theme.breakpoints.up('ds')]: {
    minHeight: '260px',
  },
  [theme.breakpoints.up('530')]: {
    minHeight: '280px',
  },
  [theme.breakpoints.up('sm')]: {
    minHeight: '320px',
  },
  [theme.breakpoints.up('dm')]: {
    minHeight: '166px',
  },
  [theme.breakpoints.up('bm')]: {
    minHeight: '190px',
  },
  [theme.breakpoints.up('md')]: {
    minHeight: '240px',
  },
  [theme.breakpoints.up('dl')]: {
    minHeight: '265px',
  },
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
}));
