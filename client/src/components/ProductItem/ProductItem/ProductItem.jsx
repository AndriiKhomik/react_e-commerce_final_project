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
import UnavailableItem from '../UnavailableItem/UnavailableItem';

const ProductItem = ({
  name,
  url,
  price,
  salePrice,
  author,
  itemNo,
  categories,
  authorId,
  _id,
  quantity,
  publisher,
  shortDescription,
  fullDescription,
  yearOfPublishing,
  genre,
  numberOfPages,
  coverType,
  fromAuthor,
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
        publisher,
        shortDescription,
        fullDescription,
        yearOfPublishing,
        genre,
        numberOfPages,
        coverType,
      }),
    );
  };

  const isAvailable = quantity <= 0;
  const showOpacity = isAvailable ? '0.35' : 1;

  return (
    <StyledItem>
      <StyledLink
        as={Link}
        to={`/products/${itemNo}`}
        aria-label='move to book page'
        sx={{ opacity: `${showOpacity}` }}
      >
        <BookImg
          url={url}
          name={name}
          categories={categories}
          itemNo={itemNo}
          salePrice={salePrice}
        />
      </StyledLink>
      <BookName name={name} itemNo={itemNo} showOpacity={showOpacity} />
      <StyledCardGrid>
        {!fromAuthor && <BookAuthor authorId={authorId} author={author} />}
        <BookPrice
          price={price}
          salePrice={salePrice}
          isAvailable={isAvailable}
          quantity={quantity}
        />
        <CartBtn
          onAddedToCart={onAddedToCart}
          isAvailable={isAvailable}
          showOpacity={showOpacity}
        />
      </StyledCardGrid>
      {!quantity && <UnavailableItem />}
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
  publisher: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  fullDescription: PropTypes.string.isRequired,
  yearOfPublishing: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  numberOfPages: PropTypes.number,
  coverType: PropTypes.string,
  fromAuthor: PropTypes.bool,
};

ProductItem.defaultProps = {
  url: defaultimg,
  salePrice: null,
  author: '',
  authorId: '',
  coverType: '',
  numberOfPages: null,
  fromAuthor: false,
};

export default ProductItem;
