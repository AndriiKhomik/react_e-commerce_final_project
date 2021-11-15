import { styled } from '@mui/material/styles';

export const StyledPriceBox = styled('div')`
  grid-area: price;
  display: flex;
  align-items: center;
`;

export const StyledPriceText = styled('span')`
  margin-right: 13px;
  color: #ffac0c;
  font-size: 18px;
  font-weight: 700;
`;

export const StyledPriceSaleText = styled('span')`
  color: #a5a5a5;
  font-size: 16px;
  font-weight: 400;
  text-decoration: line-through;
`;
