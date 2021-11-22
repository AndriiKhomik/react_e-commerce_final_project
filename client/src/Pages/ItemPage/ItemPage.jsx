import React from 'react';
import ItemDescription from './ItemDescription/ItemDescription';
import ItemImg from './ItemImg/ItemImg';
import ItemPrice from './ItemPrice/ItemPrice';
import ItemTitle from './ItemTitle/ItemTitle';
import { productItem } from './singleBook';
import { StyledContainer, StyledDescription } from './Styles';

const {
  name,
  price,
  genre,
  shortDescription,
  img,
  // author,
  // publisher,
  // yearOfPublish,
  // pages,
  reviews,
} = productItem;
const ItemPage = () => {
  return (
    <StyledContainer>
      <ItemImg img={img} name={name} />
      <StyledDescription>
        <ItemTitle name={name} genre={genre} />
        <ItemPrice price={price} reviews={reviews} />
        <ItemDescription shortDescription={shortDescription} />
      </StyledDescription>
    </StyledContainer>
  );
};

export default ItemPage;
