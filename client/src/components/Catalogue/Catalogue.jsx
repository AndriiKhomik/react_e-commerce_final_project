import React, { useEffect, useState } from 'react';
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
  const [isEmpty, setIsEmpty] = useState(false);
  const products = useSelector((data) => data.books);

  useEffect(() => {
    if (!products.length) {
      setIsEmpty(true);
    }
  }, [products.length]);

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
      <CatalogList query={query} />
      {isEmpty && <EmptyCatalogueNote />}
      <StyledFilterContainer variant='persistent' anchor='left' open={open}>
        <CloseFilterBtn onClick={handleFilterClose} />
        <HiddenFilter onClick={handleFilterClose} />
      </StyledFilterContainer>
    </>
  );
};

export default Catalogue;
