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
import defaultimg from '../../../img/missing_image.jpg';

const ProductItem = ({ name, url, price, author, salePrice, itemNo }) => {
  return (
    <>
      {/* !!!add correct link -> page of one book */}
      <StyledLink
        as={Link}
        to={`/products/${itemNo}`}
        aria-label='move to book page'
      >
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
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  url: PropTypes.string,
  salePrice: PropTypes.number,
  itemNo: PropTypes.string.isRequired,
};

ProductItem.defaultProps = {
  url: defaultimg,
  salePrice: null,
};

export default ProductItem;
