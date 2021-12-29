import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setGenres, setFormats } from '../../../store/filter/actions';
import FilterLabel from '../FilterLabel';
import { StyledCheckbox, StyledFormControll, StyledListItem } from './Styles';
import { modifyCheckboxName } from './modifyCheckboxName';

const FilterItem = ({ name, count, groupTitle }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const checkedGenre = useSelector((data) => data.filter.selectedGenre);
  const clickHandler = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (
      checkedGenre &&
      checkedGenre.toLowerCase() === modifyCheckboxName(name)
    ) {
      setIsChecked(true);
    }
  }, []);

  useEffect(() => {
    if (groupTitle === 'genres') {
      dispatch(setGenres({ name, isChecked }));
    }
    if (groupTitle === 'formats') {
      dispatch(setFormats({ name, isChecked }));
    }
  }, [isChecked]);

  return (
    <StyledListItem>
      <StyledFormControll
        label={<FilterLabel name={name} count={count} />}
        control={<StyledCheckbox checked={isChecked} onChange={clickHandler} />}
      />
    </StyledListItem>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  groupTitle: PropTypes.string.isRequired,
};

export default FilterItem;
