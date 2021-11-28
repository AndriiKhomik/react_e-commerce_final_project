import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import ItemButtons from './ItemButtons/ItemButtons';
// import ItemDescription from './ItemDescription/ItemDescription';
// import ItemFormats from './ItemFormats/ItemFormats';
// import ItemImg from './ItemImg/ItemImg';
// import ItemInfo from './ItemInfo/ItemInfo';
// import ItemPrice from './ItemPrice/ItemPrice';
// import ItemTitle from './AuthorTitle/AuthorTitle';
// import { getItemProduct } from '../../api/api';
// import { StyledContainer, StyledDescription } from './Styles';
// import Loader from './Loader/Loader';

export const getAuthor = async () => {
  const response = await fetch('../../api/authors.json');
  if (response.ok) {
    return response.json();
  }
  throw new Error(response);
};
console.log(getAuthor());


const AuthorPage = () => {
  const [author, setAuthor] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAuthor()
      .then((data) => {
        setAuthor(data);
      })
      // .finally(() => setIsLoading(false));
      .finally((data) => console.log(data));
  }, []);

  const { name, dateOfBirth, biography, authorUrl } = author;
  return (
    <Container>
      dddddddddd
      {name}
      {dateOfBirth}
      {biography}
      {authorUrl}
    </Container>
  );
};

export default AuthorPage;
