import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BookImg from '../BookImg/BookImg';
import FavouriteBtn from '../FavouriteBtn';
import BookSaleTag from '../BookSaleTag';
import BookName from '../BookName';
import BookAuthor from '../BookAuthor';
import BookPrice from '../BookPrice';
import CartBtn from '../CartBtn';
import { StyledLink, StyledCardGrid } from './Styles';

const ProductItem = ({ book }) => {
  const { name, url, price, author, salePrice } = book;
  return (
    <>
      {/* !!!add correct link -> page of one book */}

      <StyledLink as={Link} to='/contacts' aria-label='move to book page'>
        <BookImg url={url} name={name} />
        <FavouriteBtn />
        <BookSaleTag salePrice={salePrice} />
      </StyledLink>
      <BookName name={name} />
      <StyledCardGrid>
        <BookAuthor author={author} />
        <BookPrice price={price} salePrice={salePrice} />
        <CartBtn />
      </StyledCardGrid>
    </>
  );
};

ProductItem.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    salePrice: PropTypes.string,
  }).isRequired,
};

export default ProductItem;
