import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { setGenres, setFormats } from '../../../store/filter/actions';
import FilterLabel from '../FilterLabel';
import { StyledCheckbox, StyledFormControll, StyledListItem } from './Styles';
import { modifyCheckboxName } from './modifyCheckboxName';
import useQuery from '../../../services/hooks/useQuery';

const FilterItem = ({ name, groupTitle }) => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const query = useQuery();
  const clickHandler = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (groupTitle === 'genres') {
      dispatch(setGenres({ name, isChecked }));
    }
    if (groupTitle === 'formats') {
      dispatch(setFormats({ name, isChecked }));
    }
  }, [isChecked]);

  useEffect(() => {
    if (
      query.get('genre') === modifyCheckboxName(name) ||
      query.get('categories') === modifyCheckboxName(name)
    ) {
      setIsChecked(true);
    }
  }, [query]);

  return (
    <StyledListItem>
      <StyledFormControll
        label={<FilterLabel name={name} />}
        control={<StyledCheckbox checked={isChecked} onChange={clickHandler} />}
      />
    </StyledListItem>
  );
};

FilterItem.propTypes = {
  name: PropTypes.string.isRequired,
  groupTitle: PropTypes.string.isRequired,
};

export default FilterItem;
