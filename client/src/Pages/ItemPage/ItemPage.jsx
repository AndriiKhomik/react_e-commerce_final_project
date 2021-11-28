import React, { useEffect, useState } from 'react';
import ItemButtons from '../../components/ItemPageComponents/ItemButtons/ItemButtons';
import ItemDescription from '../../components/ItemPageComponents/ItemDescription/ItemDescription';
// import ItemFormats from '../../components/ItemPageComponents/ItemFormats';
import ItemImg from '../../components/ItemPageComponents/ItemImg/ItemImg';
import ItemInfo from '../../components/ItemPageComponents/ItemInfo/ItemInfo';
import ItemPrice from '../../components/ItemPageComponents/ItemPrice/ItemPrice';
import ItemTitle from '../../components/ItemPageComponents/ItemTitle/ItemTitle';
import { getItemProduct } from '../../api/products';
import { StyledContainer, StyledDescription } from './Styles';
import Loader from '../../components/ItemPageComponents/Loader/Loader';

const ItemPage = () => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItemProduct('41028')
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
        {/* <ItemFormats /> */}
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
