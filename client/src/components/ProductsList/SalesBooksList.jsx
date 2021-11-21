import React from 'react';
import { items } from './products';
import BooksList from './BooksList';

const SalesBooksList = () => {
  return <BooksList items={items} text='Sales' />;
};

export default SalesBooksList;
