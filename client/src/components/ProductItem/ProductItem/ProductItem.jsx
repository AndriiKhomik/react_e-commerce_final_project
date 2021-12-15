import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BookImg from '../BookImg/BookImg';
import BookName from '../BookName';
import BookAuthor from '../BookAuthor';
import BookPrice from '../BookPrice';
import CartBtn from '../CartBtn';
import { StyledLink, StyledCardGrid, StyledItem } from './Styles';
import defaultimg from '../../../img/missing_image.jpg';
import { bookAddedToCart } from '../../../store/cart/actions';

const ProductItem = ({
  name,
  url,
  price,
  author,
  salePrice,
  itemNo,
  categories,
  authorId,
  _id,
  quantity,
}) => {
  const dispatch = useDispatch();

  const onAddedToCart = () => {
    dispatch(
      bookAddedToCart({
        name,
        url,
        price,
        author,
        salePrice,
        itemNo,
        categories,
        _id,
        quantity,
      }),
    );
  };

  return (
    <StyledItem>
      <StyledLink
        as={Link}
        to={`/products/${itemNo}`}
        aria-label='move to book page'
      >
        <BookImg
          url={url}
          name={name}
          categories={categories}
          itemNo={itemNo}
          salePrice={salePrice}
        />
      </StyledLink>
      <BookName name={name} itemNo={itemNo} />
      <StyledCardGrid>
        <BookAuthor authorId={authorId} author={author} />
        <BookPrice price={price} salePrice={salePrice} />
        <CartBtn onAddedToCart={onAddedToCart} />
      </StyledCardGrid>
    </StyledItem>
  );
};

ProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.string,
  url: PropTypes.string,
  salePrice: PropTypes.number,
  itemNo: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
  authorId: PropTypes.string,
  _id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

ProductItem.defaultProps = {
  url: defaultimg,
  salePrice: null,
  author: '',
  authorId: '',
};

export default ProductItem;
