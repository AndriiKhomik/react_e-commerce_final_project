import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  StyledButtonsWrapper,
  StyledButtonText,
  StyledCartButton,
  StyledFavoriteBtnBox,
  StyledFavoriteBtn,
} from './Styles';

const ItemButtons = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  const onCartClick = () => {};

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

export default ItemButtons;
