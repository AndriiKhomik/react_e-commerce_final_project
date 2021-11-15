import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { StyledFavouriteBtnBox, StyledFavouriteBtn } from './Styles';

const FavouriteBtn = () => {
  const [isFavourite, setIsFavourite] = useState(false);

  const onFavouriteClick = (e) => {
    e.preventDefault();
    setIsFavourite(!isFavourite);
  };
  return (
    <StyledFavouriteBtnBox>
      <StyledFavouriteBtn onClick={onFavouriteClick}>
        {isFavourite ? (
          <FavoriteIcon aria-label='remove from favourites books' />
        ) : (
          <FavoriteBorderIcon aria-label='add to favourites books' />
        )}
      </StyledFavouriteBtn>
    </StyledFavouriteBtnBox>
  );
};

export default FavouriteBtn;
