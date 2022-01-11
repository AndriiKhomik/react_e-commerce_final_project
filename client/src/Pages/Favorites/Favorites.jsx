import React from 'react';
import SectionTitles from '../../components/SectionTitles';
import { pageTitles } from './pageTitles';
import FavoritesList from '../../components/FavoritesList';

const Favorites = () => {
  return (
    <>
      <SectionTitles titles={pageTitles} />
      <FavoritesList />
    </>
  );
};

export default Favorites;
