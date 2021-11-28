import React, { useEffect, useState } from 'react';
import ItemButtons from './ItemButtons/ItemButtons';
import ItemDescription from './ItemDescription/ItemDescription';
import ItemFormats from './ItemFormats/ItemFormats';
import ItemImg from './ItemImg/ItemImg';
import ItemInfo from './ItemInfo/ItemInfo';
import ItemPrice from './ItemPrice/ItemPrice';
import ItemTitle from './ItemTitle/ItemTitle';
import { getItemProduct } from '../../api/api';
// import { productItem } from './singleBook';
import { StyledContainer, StyledDescription } from './Styles';
import Loader from './Loader/Loader';

const ItemPage = () => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItemProduct('912796')
      .then((data) => {
        setBook(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const {
    name,
    currentPrice,
    genre,
    shortDescription,
    imageUrls,
    author,
    publisher,
    yearOfPublishing,
    duration,
  } = book;
  return isLoading ? (
    <Loader />
  ) : (
    <StyledContainer>
      <ItemImg img={imageUrls} name={name} />
      <StyledDescription>
        <ItemTitle name={name} genre={genre} />
        <ItemPrice price={currentPrice} />
        <ItemDescription shortDescription={shortDescription} />
        <ItemFormats />
        <ItemInfo
          author={author.name}
          publisher={publisher}
          yearOfPublish={new Date(yearOfPublishing).getFullYear()}
          pages={duration}
          genre={genre}
        />
        <ItemButtons />
      </StyledDescription>
    </StyledContainer>
  );
};

export default ItemPage;
