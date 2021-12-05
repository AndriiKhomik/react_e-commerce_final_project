import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import ItemButtons from '../../components/ItemPageComponents/ItemButtons/ItemButtons';
// import ItemDescription from '../../components/ItemPageComponents/ItemDescription/ItemDescription';
import ItemImg from '../../components/ItemPageComponents/ItemImg/ItemImg';
// import ItemInfo from '../../components/ItemPageComponents/ItemInfo/ItemInfo';
// import ItemPrice from '../../components/ItemPageComponents/ItemPrice/ItemPrice';
// import ItemTitle from '../../components/ItemPageComponents/ItemTitle/ItemTitle';
import { getAuthor } from '../../api/authors';
import { pageTitles } from './pageTitles';
import SectionTitles from '../../components/SectionTitles';
import { StyledContainer, StyledDescription } from './Styles';
import Loader from '../../components/ItemPageComponents/Loader/Loader';
// import SectionTitles from '../../components/SectionTitles/SectionTitles';
// import { bookPageTitles } from '../../components/SectionTitles/pageTitles';
// import ItemReviewsBlock from '../../components/ItemPageComponents/ItemReviewsBlock/ItemReviewsBlock';
// import { RelatedBooksList } from '../../components/ProductsList';

const AuthorPage = ({ match }) => {
  const [author, setAuthor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAuthor(match.url)
      .then((data) => {
        setAuthor(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const {
    name,
    //   // currentPrice,
    //   // genre,
    //   // shortDescription,
    //   // imageUrls,
    authorUrl,
    //   // publisher,
    //   // yearOfPublishing,
    //   // numberOfPages,
    //   // duration,
    //   // fullDescription,
  } = author;

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <SectionTitles titles={pageTitles} itemTitle={name} />
      <StyledContainer>
        <ItemImg img={authorUrl} name={name} />
        <StyledDescription>
          <span>name</span>
        </StyledDescription>
      </StyledContainer>
    </>
  );
};
AuthorPage.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.objectOf(PropTypes.string),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};
export default AuthorPage;
