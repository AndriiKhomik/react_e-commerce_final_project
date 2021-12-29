import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import {
  StyledLink,
  StyledImg,
  StyledSpan,
  SryledListItem,
  StyledSmallSpan,
  StyledBookNameSpan,
  StyledDivider,
  StyledBookCodeSpan,
} from './Styles';
import {
  StyledTitle,
  StyledBox,
  StyledSubtitleSpan,
  StyledYellowSpan,
} from '../Styles';

const OrderProducts = () => {
  const products = useSelector((data) => data.shoppingCart);

  return (
    <>
      <StyledTitle>Your Order</StyledTitle>
      <StyledBox>
        <StyledSubtitleSpan>Products</StyledSubtitleSpan>
        <StyledSpan>Subtotal</StyledSpan>
      </StyledBox>
      <StyledDivider />
      <List>
        {products.map(({ url, name, price, cartQuantity, itemNo }) => (
          <SryledListItem key={itemNo}>
            <StyledLink to={`/products/${itemNo}`}>
              <StyledImg width='42' height='64' src={url} alt='book cover' />
              <p>
                <StyledBookNameSpan>{name}</StyledBookNameSpan>
                <StyledSmallSpan>
                  <StyledBookCodeSpan>SKU </StyledBookCodeSpan>
                  {itemNo}
                </StyledSmallSpan>
              </p>
            </StyledLink>
            <StyledSmallSpan>(x{cartQuantity})</StyledSmallSpan>
            <StyledYellowSpan sx={{ width: '50px' }}>
              &#36; {price * cartQuantity}
            </StyledYellowSpan>
          </SryledListItem>
        ))}
      </List>
    </>
  );
};
export default OrderProducts;
