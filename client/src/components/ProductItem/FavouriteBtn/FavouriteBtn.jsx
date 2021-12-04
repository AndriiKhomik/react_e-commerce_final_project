import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StyledFavouriteBtnBox, StyledFavouriteBtn } from './Styles';
import {
  removeFromFavorites,
  setFavorites,
} from '../../../store/favorites/actions';

const FavouriteBtn = ({ itemNo }) => {
  const dispatch = useDispatch();
  const selectedFavoriteItems = useSelector((state) => state.favorites);

  const onFavouriteClick = (e) => {
    e.preventDefault();
    if (!selectedFavoriteItems.includes(itemNo)) {
      dispatch(setFavorites(itemNo));
    } else {
      dispatch(removeFromFavorites(itemNo));
    }
  };

  return (
    <StyledFavouriteBtnBox>
      <StyledFavouriteBtn onClick={onFavouriteClick}>
        {selectedFavoriteItems.includes(itemNo) ? (
          <FavoriteIcon aria-label='remove from favourites books' />
        ) : (
          <FavoriteBorderIcon aria-label='add to favourites books' />
        )}
      </StyledFavouriteBtn>
    </StyledFavouriteBtnBox>
  );
};

FavouriteBtn.propTypes = {
  itemNo: PropTypes.string.isRequired,
};

export default FavouriteBtn;
