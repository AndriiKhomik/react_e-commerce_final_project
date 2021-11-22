import { styled } from '@mui/material/styles';

export const StyledCardMediaWrapper = styled('div')`
  position: relative;
  min-height: 491px;
  min-width: 321px;
`;

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
  margin: auto;
  display: block;
  object-fit: cover;
`;
