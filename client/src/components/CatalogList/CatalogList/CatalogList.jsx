import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { filterProducts } from '../../../api/products';
import ProductItem from '../../ProductItem/ProductItem';
import ListLoader from '../../ListLoader';
import { setBooks } from '../../../store/bookList/actions';
import { StyledItem, StyledList } from './Styles';
import {
  setSelectedGenre,
  setSelectedAuthorId,
} from '../../../store/filter/actions';

const CatalogList = ({ query }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector(({ books }) => books);
  const selectedGenre = useSelector(({ filter }) => filter.selectedGenre);
  const selectedAuthorId = useSelector(({ filter }) => filter.authorId);

  const updateBooksList = (queryString = query) => {
    filterProducts(queryString)
      .then((data) => {
        dispatch(setBooks(data.products));
      })
      .finally(() => setIsLoading(false));
  };

  // initial render without updating query, genre and author!
  useEffect(() => {
    dispatch(setSelectedGenre(''));
    dispatch(setSelectedAuthorId(''));
    if (!selectedGenre && !query && !selectedAuthorId) {
      updateBooksList();
    }
  }, []);

  useEffect(() => {
    if (query) updateBooksList();
  }, [query]);

  useEffect(() => {
    if (selectedGenre) updateBooksList(`genre=${selectedGenre}`);
  }, [selectedGenre]);

  useEffect(() => {
    if (selectedAuthorId) updateBooksList(`author=${selectedAuthorId}`);
  }, [selectedAuthorId]);

  const productsElements = products.map(
    ({
      name,
      itemNo,
      imageUrls,
      currentPrice,
      author,
      previousPrice,
      categories,
    }) => {
      return (
        <StyledItem key={itemNo}>
          <ProductItem
            name={name}
            url={imageUrls[0]}
            price={currentPrice}
            salePrice={previousPrice}
            author={author.name}
            // eslint-disable-next-line no-underscore-dangle
            authorId={author._id}
            itemNo={itemNo}
            categories={categories}
          />
        </StyledItem>
      );
    },
  );

  return isLoading ? (
    <ListLoader />
  ) : (
    <StyledList>{productsElements}</StyledList>
  );
};

CatalogList.propTypes = {
  query: PropTypes.string,
};

CatalogList.defaultProps = {
  query: '',
};

export default CatalogList;
