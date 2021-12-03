import React from 'react';
import { List } from '@mui/material';
import { products } from './poducts';
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
  return (
    <>
      <StyledTitle>Your Order</StyledTitle>
      <StyledBox>
        <StyledSubtitleSpan>Products</StyledSubtitleSpan>
        <StyledSpan>Subtotal</StyledSpan>
      </StyledBox>
      <StyledDivider />
      <List>
        {products.map(({ id, img, name, price, quantity, itemNo }) => (
          <SryledListItem key={id}>
            <img src={img} alt={name} title={name} height='70' />
            <p>
              <StyledBookNameSpan>{name}</StyledBookNameSpan>
              <StyledSmallSpan>
                <StyledBookCodeSpan>SKU </StyledBookCodeSpan>
                {itemNo}
              </StyledSmallSpan>
            </p>
            <StyledSmallSpan>(x{quantity})</StyledSmallSpan>
            <StyledYellowSpan>&#36; {price}</StyledYellowSpan>
          </SryledListItem>
        ))}
      </List>
    </>
  );
};
export default OrderProducts;
