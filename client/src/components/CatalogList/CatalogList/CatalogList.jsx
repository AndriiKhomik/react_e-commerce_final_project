import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { filterProducts } from '../../../api/products';
import ProductItem from '../../ProductItem/ProductItem';
import ListLoader from '../../ListLoader';
import { setBooks } from '../../../store/bookList/actions';
import { StyledItem, StyledList } from './Styles';
import { setSelectedGenre } from '../../../store/filter/actions';

const CatalogList = ({ query }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((data) => data.bookList);
  const selectedGenre = useSelector(({ filter }) => filter.selectedGenre);

  const updateBooksList = (queryString = query) => {
    filterProducts(queryString)
      .then((data) => {
        dispatch(setBooks(data.products));
      })
      .finally(() => setIsLoading(false));
  };

  // initial render without updating query and genre!
  useEffect(() => {
    dispatch(setSelectedGenre(''));
    if (!selectedGenre && !query) {
      console.log('initial render', query);
      updateBooksList();
    }
  }, []);

  // update by changed query
  useEffect(() => {
    if (query) {
      console.log('changed query ->', query);
      updateBooksList();
    }
  }, [query]);

  // update by changed selectedGenre
  useEffect(() => {
    if (selectedGenre) {
      console.log('changed selectedGenre ->', selectedGenre);
      updateBooksList(`genre=${selectedGenre}`);
    }
  }, [selectedGenre]);

  const productsElements = products.map(
    ({
      name,
      itemNo,
      imageUrls,
      currentPrice,
      author,
      previousPrice,
      categories,
      _id,
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
            _id={_id}
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
