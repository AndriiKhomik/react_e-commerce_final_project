import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const StyledCardGrid = styled('div')`
  display: grid;
  grid-template-rows: 18px 16px;
  grid-template-columns: auto 37px;
  grid-template-areas:
    'author cart'
    'price cart';
  row-gap: 9px;
`;

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
