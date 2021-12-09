import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HiddenFilter from '../Filter/HiddenFilter';
import RowFilter from '../Filter/RowFilter';
import CloseFilterBtn from '../Filter/CloseFilterBtn';
import CatalogList from '../CatalogList/CatalogList';
import EmptyCatalogueNote from '../EmptyCatalogueNote';
import SectionTitles from '../SectionTitles';
import { pageTitles } from '../SectionTitles/pageTitles';
import { StyledFilterContainer } from './Styles';

const Catalogue = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const products = useSelector((data) => data.books);

  const handleFilterOpen = () => {
    setOpen(true);
  };

  const handleFilterClose = (queryString) => {
    setOpen(false);
    if (typeof queryString === 'string') {
      setQuery(queryString);
    }
  };

  return (
    <>
      <SectionTitles titles={pageTitles.slice(0, 2)} />
      <RowFilter onClick={handleFilterOpen} />
      {products.length ? <CatalogList query={query} /> : <EmptyCatalogueNote />}
      <StyledFilterContainer variant='persistent' anchor='left' open={open}>
        <CloseFilterBtn onClick={handleFilterClose} />
        <HiddenFilter onClick={handleFilterClose} />
      </StyledFilterContainer>
    </>
  );
};

export default Catalogue;
