import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { StyledPriceValue, StyledSlider, StyledPriceTag } from './Styles';
import { setMinPrice, setMaxPrice } from '../../../store/filter/actions';

const valuetext = (value) => {
  return `${value}°C`;
};

const FilterRange = () => {
  const minDistance = 10;
  const [value, setValue] = useState([20, 500]);
  const dispatch = useDispatch();

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }

    dispatch(setMinPrice(value[0]));
    dispatch(setMaxPrice(value[1]));
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
        // !!!should be changed to max books price
        max={1000}
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
