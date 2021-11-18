import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledCardMediaWrapper = styled('div')(() => ({
  position: 'relative',
  minHeight: '243px',
  width: '100%',
  height: '100%',
  marginBottom: '20px',
  [theme.breakpoints.up('dm')]: {
    minHeight: '327px',
  },
  [theme.breakpoints.up('dl')]: {
    minHeight: '243px',
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

export const StyledCardMedia = styled('img')`
  position: absolute;
  top: 0;
  inset: 0;
  padding: 0;
  border-radius: 4px;
  margin: auto;
  display: block;
  width: 0;
  height: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center bottom;
`;
