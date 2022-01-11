import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
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
import {
  removeFromFavorites,
  setFavorites,
} from '../../../store/favorites/actions';

const ItemButtons = ({ book }) => {
  const dispatch = useDispatch();
  const selectedFavoriteItems = useSelector((state) => state.favorites);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (!selectedFavoriteItems.includes(book.itemNo)) {
      dispatch(setFavorites(book.itemNo));
    } else {
      dispatch(removeFromFavorites(book.itemNo));
    }
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

  const isAvailable = quantity < 1 ? 0.35 : 1;

  return (
    <StyledButtonsWrapper>
      <StyledCartButton
        onClick={onCartClick}
        disabled={!quantity}
        style={{ opacity: isAvailable }}
      >
        <StyledButtonText>
          {quantity > 0 ? 'Add to cart' : 'Unavailable'}
        </StyledButtonText>
      </StyledCartButton>
      <StyledFavoriteBtnBox>
        <StyledFavoriteBtn onClick={onFavoriteClick}>
          {selectedFavoriteItems.includes(itemNo) ? (
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
