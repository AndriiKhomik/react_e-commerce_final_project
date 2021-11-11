import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CardActions } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { LightTooltip } from './LightTooltip';
import {
  StyledListItem,
  StyledCartButton,
  StyledCardMediaWrapper,
  StyledCardMediaBox,
  StyledCardMedia,
  StyledFavouriteBtnBox,
  StyledFavouriteBtn,
  StyledLink,
  StyledSaleParagraph,
  StyledPriceBox,
  StyledPriceText,
  StyledPriceSaleText,
  StyledCardGrid,
  StyledAuthorText,
  StyledBookNameText,
} from './Styles';

import CartIcon from '../icons/CartIcon';
import defaultimg from '../../img/missing_image.jpeg';

const ProductItem = ({ book }) => {
  const { name, url, price, author, salePrice } = book;
  const trimmedValue = (value, length) => {
    return value.length > length
      ? `${value.substring(0, length - 3)}...`
      : value;
  };

  return (
    <>
      <StyledListItem>
        <StyledLink as={Link} to='/contacts' aria-label='move to book page'>
          <div>
            <LightTooltip title={name} placement='top'>
              <StyledCardMediaWrapper>
                <StyledCardMediaBox>
                  <StyledCardMedia
                    height='327'
                    src={url || defaultimg}
                    alt={name}
                  />
                </StyledCardMediaBox>
              </StyledCardMediaWrapper>
            </LightTooltip>
            <div>
              <StyledFavouriteBtnBox>
                <StyledFavouriteBtn>
                  <FavoriteBorderIcon />
                </StyledFavouriteBtn>
              </StyledFavouriteBtnBox>
              {salePrice && <StyledSaleParagraph>Sale</StyledSaleParagraph>}
              <StyledBookNameText>{trimmedValue(name, 49)}</StyledBookNameText>
              <StyledCardGrid>
                <StyledAuthorText
                  as={Link}
                  to='/contacts'
                  aria-label={`move to ${author} page`}
                >
                  {trimmedValue(author, 20)}
                </StyledAuthorText>
                <StyledPriceBox>
                  <StyledPriceText>&#36;{price}</StyledPriceText>
                  {salePrice && (
                    <StyledPriceSaleText>&#36;{salePrice}</StyledPriceSaleText>
                  )}
                </StyledPriceBox>
                <CardActions>
                  <StyledCartButton>
                    <CartIcon width='16px' height='17px' fill='#ffffff' />
                  </StyledCartButton>
                </CardActions>
              </StyledCardGrid>
            </div>
          </div>
        </StyledLink>
      </StyledListItem>
    </>
  );
};

ProductItem.propTypes = {
  book: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string,
    salePrice: PropTypes.string,
  }).isRequired,
};

export default ProductItem;
