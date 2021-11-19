import React from 'react';
import { items } from './products';
import BooksList from './BooksList';

const RecommendedBooksList = () => {
  return <BooksList items={items} text='Recommended' />;
};

export default RecommendedBooksList;
