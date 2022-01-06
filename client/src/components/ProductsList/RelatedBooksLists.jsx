import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProductsByQuery } from '../../api/products';
import BooksList from './BooksList';
import ErrorIndicator from '../ErrorIndicator';
import ListLoader from '../ListLoader/ListLoader';

const RelatedBooksList = ({ genre, itemNo }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getProductsByQuery('genre', genre, itemNo)
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  }, [itemNo]);

  return (
    <>
      {hasError && <ErrorIndicator />}
      {isLoading ? (
        <ListLoader />
      ) : (
        <BooksList items={products} text='Related products' />
      )}
    </>
  );
};

RelatedBooksList.propTypes = {
  genre: PropTypes.string,
  itemNo: PropTypes.string,
};

RelatedBooksList.defaultProps = {
  genre: 'children-literature',
  itemNo: null,
};

export default RelatedBooksList;
