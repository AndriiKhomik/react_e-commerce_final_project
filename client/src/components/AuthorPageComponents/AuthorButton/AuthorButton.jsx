import React from 'react';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
import { StyledButtonsWrapper, StyledButtonText, StyledButton } from './Styles';

const AuthorButton = ({ id }) => {
  // const dispatch = useDispatch();

  const onClick = () => {
    // dispatch(setSelectedAuthor(id));
    console.log(id);
  };

  return (
    <StyledButtonsWrapper>
      <StyledButton onClick={onClick} to='/products'>
        <StyledButtonText>Show all books</StyledButtonText>
      </StyledButton>
    </StyledButtonsWrapper>
  );
};

AuthorButton.propTypes = {
  id: PropTypes.string.isRequired,
};
export default AuthorButton;
