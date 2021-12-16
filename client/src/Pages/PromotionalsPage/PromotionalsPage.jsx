import React from 'react';
import PromotionalsList from '../../components/PromotionalsPageComponents/PromotionalsList';
import SectionTitles from '../../components/SectionTitles';
import { pageTitles } from './pageTitles';

const PromotionalsPage = () => {
  return (
    <>
      <SectionTitles titles={pageTitles.slice(0, 2)} />
      <PromotionalsList />
    </>
  );
};

export default PromotionalsPage;
