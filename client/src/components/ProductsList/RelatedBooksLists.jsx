import React from 'react';
import { items } from './products';
import BooksList from './BooksList';

const RelatedBooksList = () => {
  return <BooksList items={items} text='Related products' />;
};

export default RelatedBooksList;
