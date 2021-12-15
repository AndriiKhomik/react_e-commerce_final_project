import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  StyledButtonsWrapper,
  StyledButtonText,
  StyledCartButton,
  StyledFavoriteBtnBox,
  StyledFavoriteBtn,
} from './Styles';
import { bookAddedToCart } from '../../../store/cart/actions';

const ItemButtons = ({ book }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const onFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const {
    name,
    imageUrls,
    author,
    currentPrice,
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
  } = book;

  const onCartClick = () => {
    dispatch(
      bookAddedToCart({
        name,
        author,
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
        price: currentPrice,
        url: imageUrls[0],
      }),
    );
  };

  return (
    <StyledButtonsWrapper>
      <StyledCartButton onClick={onCartClick}>
        <StyledButtonText>Add to cart</StyledButtonText>
      </StyledCartButton>
      <StyledFavoriteBtnBox>
        <StyledFavoriteBtn onClick={onFavoriteClick}>
          {isFavorite ? (
            <FavoriteIcon aria-label='remove from favorites books' />
          ) : (
            <FavoriteBorderIcon aria-label='add to favorites books' />
          )}
        </StyledFavoriteBtn>
      </StyledFavoriteBtnBox>
    </StyledButtonsWrapper>
  );
};

ItemButtons.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
};

export default ItemButtons;
