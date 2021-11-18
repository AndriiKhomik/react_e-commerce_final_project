import React from 'react';
import { items } from './products';
import { StyledList } from './Styles';
import BooksListTitle from '../BooksListTitle';
import ProductItem from '../ProductItem/ProductItem';

const RelatedBooksList = () => {
  const books = items.slice(0, 6);
  return (
    <>
      <BooksListTitle text='Related products' />
      <StyledList>
        {books.map((book) => (
          <ProductItem key={book.id} book={book} />
        ))}
      </StyledList>
    </>
  );
};

export default RelatedBooksList;
