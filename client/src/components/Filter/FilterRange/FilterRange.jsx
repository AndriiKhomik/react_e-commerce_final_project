import React, { useState } from 'react';
import { Box } from '@mui/material';
import { StyledPriceValue, StyledSlider, StyledPriceTag } from './Styles';

const valuetext = (value) => {
  return `${value}°C`;
};

const FilterRange = () => {
  const minDistance = 10;
  const [value, setValue] = useState([20, 500]);
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
