import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  StyledListItem,
  StyledCartButton,
  StyledFavouriteBtnBox,
  StyledFavouriteBtn,
  StyledLink,
  StyledSaleParagraph,
  StyledPriceBox,
} from './Styles';
import CartIcon from '../icons/CartIcon';

const ProductItem = ({ book }) => {
  const { name, url, price } = book;
  return (
    <>
      <StyledListItem>
        <StyledLink component={Link} to='/contacts' underline='none'>
          <Card>
            <CardActionArea>
              <CardMedia
                component='img'
                height='327'
                image={url}
                alt={name}
                title={name}
              />
              <CardContent>
                <StyledFavouriteBtnBox>
                  <StyledFavouriteBtn>
                    <FavoriteBorderIcon />
                  </StyledFavouriteBtn>
                </StyledFavouriteBtnBox>
                <StyledSaleParagraph component='p'>Sale</StyledSaleParagraph>
                <Typography component='h2'>{name}</Typography>
                <Typography component='h3'>Author</Typography>
                <StyledPriceBox>
                  <Typography component='p'> &#36;{price}</Typography>
                  <Typography component='p'>&#36;169</Typography>
                </StyledPriceBox>
                <CardActions>
                  <StyledCartButton>
                    <CartIcon width='16px' height='17px' fill='#ffffff' />
                  </StyledCartButton>
                </CardActions>
              </CardContent>
            </CardActionArea>
          </Card>
        </StyledLink>
      </StyledListItem>
    </>
  );
};

ProductItem.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    url: PropTypes.string,
  }).isRequired,
};

export default ProductItem;
