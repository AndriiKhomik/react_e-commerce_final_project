import React, { useEffect, useState } from 'react';
import BooksList from './BooksList';
import { getProductsByQuery } from '../../api/products';
import ListLoader from '../ListLoader/ListLoader';

const SalesBooksList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsByQuery('sales')
      .then((data) => {
        setProducts(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    <ListLoader />
  ) : (
    <BooksList items={products} text='Sales' />
  );
};

export default SalesBooksList;
