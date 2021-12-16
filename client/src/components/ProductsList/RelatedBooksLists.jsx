import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getProductsByQuery } from '../../api/products';
import BooksList from './BooksList';
import ListLoader from '../ListLoader/ListLoader';

const RelatedBooksList = ({ genre, itemNo }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProductsByQuery('genre', genre, itemNo)
      .then((data) => {
        setProducts(data);
      })
      .finally(() => setIsLoading(false));
  }, [itemNo]);

  return isLoading ? (
    <ListLoader />
  ) : (
    <BooksList items={products} text='Related products' />
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
