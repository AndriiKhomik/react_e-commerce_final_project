import React from 'react';
import AuthorsList from '../../components/AuthorsList/AuthorsList';
import { authorsPageTitles } from '../../components/SectionTitles/pageTitles';
import SectionTitles from '../../components/SectionTitles';

const Authors = () => {
  return (
    <>
      <SectionTitles titles={authorsPageTitles.slice(0, 2)} />
      <AuthorsList />
    </>
  );
};

export default Authors;
