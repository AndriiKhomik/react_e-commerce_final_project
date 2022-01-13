import React, { useEffect, useState } from 'react';
import BooksList from './BooksList';
import { getProductsByQuery } from '../../api/products';
import ListLoader from '../ListLoader/ListLoader';
import ErrorIndicator from '../ErrorIndicator';

const SalesBooksList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getProductsByQuery('sales')
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
      {isLoading ? <ListLoader /> : <BooksList items={products} text='Sales' />}
    </>
  );
};

export default SalesBooksList;
