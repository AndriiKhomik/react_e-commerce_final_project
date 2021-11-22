import React from 'react';
import ItemButtons from './ItemButtons/ItemButtons';
import ItemDescription from './ItemDescription/ItemDescription';
import ItemFormats from './ItemFormats/ItemFormats';
import ItemImg from './ItemImg/ItemImg';
import ItemInfo from './ItemInfo/ItemInfo';
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
  author,
  publisher,
  yearOfPublish,
  pages,
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
        <ItemFormats />
        <ItemInfo
          author={author}
          publisher={publisher}
          yearOfPublish={yearOfPublish}
          pages={pages}
          genre={genre}
        />
        <ItemButtons />
      </StyledDescription>
    </StyledContainer>
  );
};

export default ItemPage;
