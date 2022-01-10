import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { StyledPriceValue, StyledSlider, StyledPriceTag } from './Styles';
import { setMinPrice, setMaxPrice } from '../../../store/filter/actions';
import useQuery from '../../../services/hooks/useQuery';

const valuetext = (value) => {
  return `${value}°C`;
};

const FilterRange = () => {
  const query = useQuery();
  const minDistance = 5;
  const [value, setValue] = useState([0, 30]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setMinPrice(value[0]));
    dispatch(setMaxPrice(value[1]));
  }, [value[0], value[1]]);

  useEffect(() => {
    const min = +query.get('minPrice');
    const max = +query.get('maxPrice');
    if (min || max) setValue([min, max]);
  }, [query]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <Box sx={{ width: 209 }}>
      <StyledSlider
        getAriaLabel={() => 'Select price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        disableSwap
        max={50}
      />
      <StyledPriceTag>
        <span>Price: </span>
        <StyledPriceValue>
          &#36;{value[0]}-&#36;{value[1]}
        </StyledPriceValue>
      </StyledPriceTag>
    </Box>
  );
};

export default FilterRange;
