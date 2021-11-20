import React from 'react';
import { HeroSlider } from '../../components/HeroSlider/HeroSlider';
import {
  RecommendedBooksList,
  SalesBooksList,
} from '../../components/ProductsList';

const Homepage = () => {
  return (
    <>
      <HeroSlider />
      <RecommendedBooksList />
      <SalesBooksList />
    </>
  );
};

export default Homepage;
