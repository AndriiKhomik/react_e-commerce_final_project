import React from 'react';
import { items } from './products';
import { StyledList } from './Styles';
import ProductItem from '../ProductItem/ProductItem';

const ProductsList = () => {
  const books = items.slice(0, 6);
  return (
    <StyledList>
      {books.map((book) => (
        <ProductItem key={book.id} book={book} />
      ))}
    </StyledList>
  );
};

export default ProductsList;
