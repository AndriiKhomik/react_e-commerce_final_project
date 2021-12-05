import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
import SectionTitles from '../../components/SectionTitles/SectionTitles';
import { bookPageTitles } from '../../components/SectionTitles/pageTitles';
import ItemReviewsBlock from '../../components/ItemPageComponents/ItemReviewsBlock/ItemReviewsBlock';
import { RelatedBooksList } from '../../components/ProductsList';

const ItemPage = ({ match }) => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getItemProduct(match.url)
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
    numberOfPages,
    duration,
    fullDescription,
  } = book;
  console.log(book);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <SectionTitles titles={bookPageTitles} itemTitle={name} />
      <StyledContainer>
        <ItemImg img={imageUrls} name={name} />
        <StyledDescription>
          <ItemTitle name={name} genre={genre} />
          <ItemPrice price={currentPrice} value={3} />
          <ItemDescription shortDescription={shortDescription} />
          {/* <ItemFormats /> */}
          <ItemInfo
            author={author}
            publisher={publisher}
            yearOfPublish={new Date(yearOfPublishing).getFullYear()}
            pages={numberOfPages}
            duration={duration}
            genre={genre}
          />
          <ItemButtons />
        </StyledDescription>
      </StyledContainer>
      <ItemReviewsBlock fullDescription={fullDescription} />
      <RelatedBooksList genre={genre} />
    </>
  );
};

ItemPage.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
export default ItemPage;
