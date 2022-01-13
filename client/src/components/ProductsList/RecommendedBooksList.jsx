import React, { useState, useEffect } from 'react';
import { getProductsByQuery } from '../../api/products';
import ErrorIndicator from '../ErrorIndicator';
import ListLoader from '../ListLoader/ListLoader';
import BooksList from './BooksList';

const RecommendedBooksList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getProductsByQuery('isRecommended')
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {hasError && <ErrorIndicator />}
      {isLoading ? (
        <ListLoader />
      ) : (
        <BooksList items={products} text='Recommended' />
      )}
    </>
  );
};

export default RecommendedBooksList;
