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
  setSelectedTag,
  setSelectedSort,
} from '../../../store/filter/actions';

const CatalogList = ({ query }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector(({ books }) => books);
  const selectedGenre = useSelector(({ filter }) => filter.selectedGenre);
  const selectedSort = useSelector(({ filter }) => filter.selectedSort);
  const selectedTag = useSelector(({ filter }) => filter.selectedTag);

  const currentSorting = selectedSort === 'lower-price' ? -1 : 1;

  const updateBooksList = (queryString = query) => {
    filterProducts(queryString)
      .then((data) => {
        dispatch(setBooks(data.products));
      })
      .finally(() => setIsLoading(false));
  };

  // initial render without updating query, genre and tag!
  useEffect(() => {
    dispatch(setSelectedGenre(''));
    dispatch(setSelectedTag('all-books'));
    dispatch(setSelectedSort('higher-price'));
    if (!selectedGenre && !query) {
      console.log('initial render', query);
      updateBooksList();
    }
  }, []);

  // update by changed query
  useEffect(() => {
    if (query) {
      dispatch(setSelectedTag('all-books'));
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

  // update by changed sorting
  useEffect(() => {
    if (selectedSort) {
      console.log('changed selectedSort ->', selectedSort);
      const tag = `&tag=${selectedTag}`;
      updateBooksList(`${query}&sort=${currentSorting}${tag}`);
    }
  }, [selectedSort]);

  // update by changed tag
  useEffect(() => {
    const sort = `&sort=${currentSorting}`;
    if (selectedTag === 'sale') {
      console.log('changed selectedTag ->', selectedTag);
      updateBooksList(`${query}&tag=${selectedTag}${sort}`);
    } else {
      console.log('changed selectedTag all books ->', selectedTag);
      updateBooksList(`${query}${sort}`);
    }
  }, [selectedTag]);

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
