import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

export const StyledLink = styled('a')`
  width: 100%;
  text-decoration: none;
  display: block;
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
  color: ${[theme.palette.primary.main]};
  font-size: 18px;
  font-weight: 700;
`;

export const StyledPriceSaleText = styled('span')`
  color: ${[theme.palette.text.gray]};
  font-size: 16px;
  font-weight: 400;
  text-decoration: line-through;
`;
