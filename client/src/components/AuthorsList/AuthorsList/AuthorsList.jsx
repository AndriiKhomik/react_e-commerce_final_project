import React, { useEffect, useState } from 'react';
import { getAuthors } from '../../../api/authors';
import AuthorItem from '../AuthorItem';
import AuthorsLoader from '../AuthorsLoader';
import { StyledList } from './Styles';

const CatalogList = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAuthors()
      .then((data) => {
        setAuthors(data);
      })
      .then((data) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const authorsElements = authors.map(({ name, _id, authorUrl }) => {
    return <AuthorItem key={_id} name={name} authorUrl={authorUrl} id={_id} />;
  });

  return isLoading ? (
    <AuthorsLoader />
  ) : (
    <StyledList>{authorsElements}</StyledList>
  );
};

export default CatalogList;
