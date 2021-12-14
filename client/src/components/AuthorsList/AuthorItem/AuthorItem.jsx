import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AuthorImg from '../AuthorImg';
import defaultimg from '../../../img/noImgAuthor.png';
import { setSelectedAuthorId } from '../../../store/filter/actions';
import {
  StyledAuthorName,
  StyledBooksLink,
  StyledItem,
  StyledImageLink,
} from './Styles';

const AuthorItem = ({ name, authorUrl, id }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setSelectedAuthorId(id));
  };

  return (
    <StyledItem>
      <StyledImageLink
        as={Link}
        to={`/authors/${id}`}
        aria-label='move to author page'
      >
        <AuthorImg authorUrl={authorUrl} name={name} />
      </StyledImageLink>
      <StyledAuthorName
        as={Link}
        to={`/authors/${id}`}
        aria-label='move to author page'
      >
        {name}
      </StyledAuthorName>
      <StyledBooksLink onClick={onClickHandler} as={Link} to='/products'>
        Look books
      </StyledBooksLink>
    </StyledItem>
  );
};

AuthorItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  authorUrl: PropTypes.string,
};

AuthorItem.defaultProps = {
  authorUrl: defaultimg,
};

export default AuthorItem;
