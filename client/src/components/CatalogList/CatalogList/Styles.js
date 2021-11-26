import { styled } from '@mui/material';

export const StyledItem = styled('li')`
  position: relative;
`;
export const StyledList = styled('ul')`
  display: grid;
  grid-template-columns: repeat(auto-fill, 163px);
  justify-content: space-between;
  row-gap: 50px;
  column-gap: 20px;
  /* когда 2 колонки сделать justify-content: center; column-gap: 70px; */
`;
