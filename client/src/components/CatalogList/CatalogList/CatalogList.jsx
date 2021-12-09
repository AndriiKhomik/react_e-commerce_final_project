import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { filterProducts } from '../../../api/products';
import ProductItem from '../../ProductItem/ProductItem';
import ListLoader from '../../ListLoader';
import { setBooks } from '../../../store/bookList/actions';
import { StyledItem, StyledList } from './Styles';

const CatalogList = ({ query }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((data) => data.books);
  const selectedGenre = useSelector((data) => data.filter.selectedGenre);

  useEffect(() => {
    try {
      filterProducts(query)
        .then((data) => {
          dispatch(setBooks(data.products));
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  useEffect(() => {
    filterProducts(`genre=${selectedGenre}`)
      .then((data) => {
        dispatch(setBooks(data.products));
      })
      .finally(() => setIsLoading(false));
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
