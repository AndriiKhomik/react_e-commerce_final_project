import React, { useEffect, useState } from 'react';
import { getAuthors } from '../../../api/authors';
import AuthorItem from '../AuthorItem';
import ListLoader from '../../ListLoader';
import { StyledList } from './Styles';

const CatalogList = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAuthors()
      .then((data) => {
        setAuthors(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const authorsElements = authors.map(({ name, _id, authorUrl }) => {
    return <AuthorItem key={_id} name={name} authorUrl={authorUrl} id={_id} />;
  });

  return isLoading ? (
    <ListLoader />
  ) : (
    <StyledList>{authorsElements}</StyledList>
  );
};

export default CatalogList;
