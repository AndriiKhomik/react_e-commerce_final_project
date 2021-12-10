import React from 'react';
import { useSelector } from 'react-redux';
import { List } from '@mui/material';
import {
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
        {products.map(({ url, name, price, quantity, itemNo }) => (
          <SryledListItem key={itemNo}>
            <img width='42px' height='64px' src={url} alt='book cover' />
            <p>
              <StyledBookNameSpan>{name}</StyledBookNameSpan>
              <StyledSmallSpan>
                <StyledBookCodeSpan>SKU </StyledBookCodeSpan>
                {itemNo}
              </StyledSmallSpan>
            </p>
            <StyledSmallSpan>(x{quantity})</StyledSmallSpan>
            <StyledYellowSpan>&#36; {price * quantity}</StyledYellowSpan>
          </SryledListItem>
        ))}
      </List>
    </>
  );
};
export default OrderProducts;
