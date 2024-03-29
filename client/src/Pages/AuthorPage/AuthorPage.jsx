import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AuthorDescription from '../../components/AuthorPageComponents/AuthorDescription/AuthorDescription';
import AuthorImg from '../../components/AuthorPageComponents/AuthorImg/AuthorImg';
import AuthorTitle from '../../components/AuthorPageComponents/AuthorTitle/AuthorTitle';
import AuthorDateOfBirth from '../../components/AuthorPageComponents/AuthorDateOfBirth/AuthorDateOfBirth';
import { getAuthor } from '../../api/authors';
import { pageTitles } from './pageTitles';
import SectionTitles from '../../components/SectionTitles';
import { StyledContainer, StyledDescription } from './Styles';
import AuthorButton from '../../components/AuthorPageComponents/AuthorButton';
import BooksList from '../../components/ProductsList/BooksList';
import ListLoader from '../../components/ListLoader/ListLoader';
import ErrorIndicator from '../../components/ErrorIndicator/ErrorIndicator';

const AuthorPage = ({ match }) => {
  const [auth, setAuth] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getAuthor(match.url)
      .then((data) => {
        setAuth(data);
      })
      .catch(() => {
        setHasError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const { books, name, authorUrl, biography, dateOfBirth, _id } = auth;

  return (
    <>
      {hasError && <ErrorIndicator />}
      {isLoading ? (
        <ListLoader />
      ) : (
        <>
          <SectionTitles titles={pageTitles} itemTitle={name} />
          <StyledContainer>
            <AuthorImg img={authorUrl} name={name} />
            <StyledDescription>
              <AuthorTitle name={name} />
              <AuthorDateOfBirth dateOfBirth={dateOfBirth.slice(0, 4)} />
              <AuthorDescription biography={biography} />
            </StyledDescription>
          </StyledContainer>
          <BooksList authorName={name} items={books} text='Books' fromAuthor />
          <AuthorButton id={_id} />
        </>
      )}
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
