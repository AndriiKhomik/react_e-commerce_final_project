import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ItemButtons from '../../components/ItemPageComponents/ItemButtons/ItemButtons';
import ItemDescription from '../../components/ItemPageComponents/ItemDescription/ItemDescription';
import ItemImg from '../../components/ItemPageComponents/ItemImg/ItemImg';
import ItemInfo from '../../components/ItemPageComponents/ItemInfo/ItemInfo';
import ItemPrice from '../../components/ItemPageComponents/ItemPrice/ItemPrice';
import ItemTitle from '../../components/ItemPageComponents/ItemTitle/ItemTitle';
import { getItemProduct } from '../../api/products';
import { StyledContainer, StyledDescription } from './Styles';
import SectionTitles from '../../components/SectionTitles/SectionTitles';
import { bookPageTitles } from '../../components/SectionTitles/pageTitles';
import ItemReviewsBlock from '../../components/ItemPageComponents/ItemReviewsBlock/ItemReviewsBlock';
import { RelatedBooksList } from '../../components/ProductsList';
import ListLoader from '../../components/ListLoader/ListLoader';

const ItemPage = ({ match }) => {
  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    name,
    currentPrice,
    previousPrice,
    genre,
    shortDescription,
    imageUrls,
    author,
    publisher,
    yearOfPublishing,
    numberOfPages,
    duration,
    fullDescription,
    itemNo,
    categories,
    quantity,
  } = book;

  useEffect(() => {
    getItemProduct(match.url)
      .then((data) => {
        setBook(data);
      })
      .finally(() => setIsLoading(false));
  }, [match.url]);

  return isLoading ? (
    <ListLoader />
  ) : (
    <>
      <SectionTitles titles={bookPageTitles} itemTitle={name} />
      <StyledContainer>
        <ItemImg img={imageUrls} name={name} categories={categories} />
        <StyledDescription>
          <ItemTitle name={name} genre={genre} />
          <ItemPrice
            price={currentPrice}
            salePrice={previousPrice}
            value={3}
            quantity={quantity}
          />
          <ItemDescription shortDescription={shortDescription} />
          <ItemInfo
            author={author}
            publisher={publisher}
            yearOfPublish={new Date(yearOfPublishing).getFullYear()}
            pages={numberOfPages}
            duration={duration}
            genre={genre}
            categories={categories}
          />
          <ItemButtons book={book} />
        </StyledDescription>
      </StyledContainer>
      <ItemReviewsBlock fullDescription={fullDescription} />
      <RelatedBooksList genre={genre} itemNo={itemNo} />
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
