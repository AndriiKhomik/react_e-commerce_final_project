import { styled } from '@mui/material/styles';
import theme from '../../../services/theme/theme';

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
