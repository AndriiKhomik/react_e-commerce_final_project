import { CardActions, Link, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledListItem = styled('li')`
  position: relative;
  transition: 0.3s linear;
  &:hover .css-1d0o2mp {
    color: #ffac0c;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  text-decoration: none;
`;

export const StyledCardMediaWrapper = styled('div')`
  position: relative;
  min-height: 327px;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
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
  inset: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  margin: auto;
  display: block;
  width: 0;
  height: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center bottom;
`;

export const StyledFavouriteBtnBox = styled(CardActions)`
  position: absolute;
  z-index: 2;
  top: 15px;
  right: 8px;
  background-color: #ffffff;
  border-radius: 4px;
`;
export const StyledFavouriteBtn = styled(Button)`
  min-width: inherit;
  padding: 0;
  color: #f8a300;
`;

export const StyledSaleParagraph = styled('p')`
  position: absolute;
  z-index: 2;
  top: 20px;
  left: 0;
  padding: 8px 16px;
  background-color: #f8a300;
  font-size: 16px;
  line-height: 1;
  color: #3d3d3d;
  border-radius: 1px;
`;

export const StyledCardGrid = styled('div')`
  display: grid;
  grid-template-rows: 18px auto;
  grid-template-columns: auto 45px;
  grid-template-areas:
    'author . '
    'price cart';
  row-gap: 9px;
`;
export const StyledBookNameText = styled('p')`
  min-height: 31px;
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 14px;
`;

export const StyledAuthorText = styled('p')`
  grid-area: author;
  color: #a5a5a5;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  transition: 0.3s linear;
  text-decoration: none;
  &:hover {
    color: #ffac0c;
  }
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

export const StyledCartButton = styled(Button)`
  min-width: inherit;
  padding: 10px 11px;
  grid-area: cart;
  align-self: start;
  background-color: #ffac0c;
  &:hover {
    background-color: #fd8502;
  }
`;
