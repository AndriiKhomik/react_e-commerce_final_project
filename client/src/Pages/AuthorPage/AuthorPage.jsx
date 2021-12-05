import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthorDescription from '../../components/AuthorPageComponents/AuthorDescription/AuthorDescription';
import ItemImg from '../../components/ItemPageComponents/ItemImg/ItemImg';
import AuthorTitle from '../../components/AuthorPageComponents/AuthorTitle/AuthorTitle';
import AuthorDateOfBirth from '../../components/AuthorPageComponents/AuthorDateOfBirth/AuthorDateOfBirth';
import { getAuthor } from '../../api/authors';
import { pageTitles } from './pageTitles';
import SectionTitles from '../../components/SectionTitles';
import { StyledContainer, StyledDescription } from './Styles';
import Loader from '../../components/ItemPageComponents/Loader/Loader';
import AuthorButton from '../../components/AuthorPageComponents/AuthorButton';
import BooksList from '../../components/ProductsList/BooksList';

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

  const { books, name, authorUrl, biography, dateOfBirth } = author;

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <SectionTitles titles={pageTitles} itemTitle={name} />
      <StyledContainer>
        <ItemImg img={authorUrl} name={name} />
        <StyledDescription>
          <AuthorTitle name={name} />
          <AuthorDateOfBirth dateOfBirth={dateOfBirth.slice(0, 4)} />
          <AuthorDescription biography={biography} />
        </StyledDescription>
      </StyledContainer>
      <BooksList items={books} text='Books' />
      <AuthorButton />
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
