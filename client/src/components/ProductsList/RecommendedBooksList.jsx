import React, { useState, useEffect } from 'react';
import { getProductsByQuery } from '../../api/products';
import ListLoader from '../ListLoader/ListLoader';
import BooksList from './BooksList';

const RecommendedBooksList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsByQuery('isRecommended')
      .then((data) => {
        setProducts(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <ListLoader />
  ) : (
    <BooksList items={products} text='Recommended' />
  );
};

export default RecommendedBooksList;
