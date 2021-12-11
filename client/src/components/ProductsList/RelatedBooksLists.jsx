import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProductsByQuery } from '../../api/products';
import BooksList from './BooksList';

const RelatedBooksList = ({ genre, itemNo }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsByQuery('genre', genre, itemNo)
      .then((data) => {
        setProducts(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return isLoading ? (
    'Loading'
  ) : (
    <BooksList items={products} text='Related products' />
  );
};

RelatedBooksList.propTypes = {
  genre: PropTypes.string,
  itemNo: PropTypes.string.isRequired,
};

RelatedBooksList.defaultProps = {
  genre: 'children-literature',
};

export default RelatedBooksList;
