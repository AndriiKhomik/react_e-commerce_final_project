import { styled } from '@mui/material/styles';

export const StyledCardMediaWrapper = styled('div')(() => ({
  position: 'relative',
  minHeight: '243px',
  width: '163px',
  height: '100%',
  marginBottom: '20px',
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
  // &:hover ~ .MuiCardActions-root {
  //   display: block;
  // }
  // &:hover ~ .css-emkvdt {
  //   display: block;
  // }
`;
