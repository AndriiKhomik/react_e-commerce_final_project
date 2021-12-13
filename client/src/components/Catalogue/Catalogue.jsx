import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirstRender } from './useFirstRender';
import HiddenFilter from '../Filter/HiddenFilter';
import RowFilter from '../Filter/RowFilter';
import CloseFilterBtn from '../Filter/CloseFilterBtn';
import CatalogList from '../CatalogList/CatalogList';
import EmptyCatalogueNote from '../EmptyCatalogueNote';
import SectionTitles from '../SectionTitles';
import { pageTitles } from '../SectionTitles/pageTitles';
import PaginationRounded from '../Pagination';
import { StyledFilterContainer } from './Styles';

const Catalogue = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);
  const products = useSelector((data) => data.books);
  const firstRender = useFirstRender();

  useEffect(() => {
    return !firstRender && !products.length
      ? setIsEmpty(true)
      : setIsEmpty(false);
  }, [firstRender, products.length]);

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
      {isEmpty ? '' : <PaginationRounded />}
    </>
  );
};

export default Catalogue;
