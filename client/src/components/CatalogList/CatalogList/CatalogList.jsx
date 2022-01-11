import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { filterProducts } from '../../../api/products';
import ProductItem from '../../ProductItem/ProductItem';
import ListLoader from '../../ListLoader';
import { setBooks } from '../../../store/bookList/actions';
import { StyledItem, StyledList } from './Styles';
import { setTotalCountOfPages } from '../../../store/filter/actions';
import ErrorIndicator from '../../ErrorIndicator';

const CatalogList = ({ query }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const products = useSelector((data) => data.bookList);
  const { search } = useLocation();
  const [hasError, setHasError] = useState(false);

  const updateBooksList = (queryString = query) => {
    filterProducts(queryString)
      .then((data) => {
        dispatch(setBooks(data.products));
        dispatch(setTotalCountOfPages(data.totalCountOfPages));
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    updateBooksList(search.slice(1));
  }, [search]);

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
      quantity,
      publisher,
      shortDescription,
      fullDescription,
      yearOfPublishing,
      genre,
      numberOfPages,
      coverType,
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
            quantity={quantity}
            publisher={publisher}
            shortDescription={shortDescription}
            fullDescription={fullDescription}
            yearOfPublishing={yearOfPublishing}
            genre={genre}
            numberOfPages={numberOfPages}
            coverType={coverType}
          />
        </StyledItem>
      );
    },
  );

  return (
    <>
      {hasError && <ErrorIndicator />}
      {isLoading ? <ListLoader /> : <StyledList>{productsElements}</StyledList>}
    </>
  );
};

CatalogList.propTypes = {
  query: PropTypes.string,
};

CatalogList.defaultProps = {
  query: '',
};

export default CatalogList;
