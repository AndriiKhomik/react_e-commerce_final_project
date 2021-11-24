import React, { useState } from 'react';
import { Box, Slider } from '@mui/material';

function valuetext(value) {
  return `${value}°C`;
}
const minDistance = 10;

const FilterRange = () => {
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
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay='auto'
        getAriaValueText={valuetext}
        disableSwap
        // !!!should be shanged to max books price
        max={1000}
      />
      <p>
        Price: &#36; {value[0]}-&#36;{value[1]}
      </p>
    </Box>
  );
};

export default FilterRange;
