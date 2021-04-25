import { useCallback } from 'react';
import { Checkbox, Collapse } from '@reusable';
import { useDispatch, useSelector } from 'react-redux';
import {
  SPECIFICS_LIST,
  SEAT_LIST,
  BAGS_LIST,
} from './constants';
import { applyFilter, removeFilter } from './actions';

const { Group } = Checkbox;

const mapping = (filteredValues) => ({field, value, label}) => {
  const checked = filteredValues.includes(value.toString());
  return (
    <Checkbox value={`${field}:${value}:${label}`} key={label} checked={checked}>{label}</Checkbox>
  )
};

const mapVendors = (filteredValues) => value => {
  const checked = filteredValues.includes(value);
  return (
    <Checkbox value={`vendor:${value}:${value}`} key={value} checked={checked}>{value}</Checkbox>
  )
};

const SearchFilter = () => {
  const { vendors, filters } = useSelector(state => state);
  const dispatch = useDispatch();

  const filtersValues = filters.map(filter => filter.value);

  const handleFilterSelect = useCallback((filterValue) => {
    const [field, value, label] = filterValue.split(':');
    if (filtersValues.includes(value)) {
      dispatch(removeFilter(field, value));
    } else {
      dispatch(applyFilter(field, value, label));
    }
  }, [dispatch, filtersValues]);

  return (
    <Group onChange={handleFilterSelect}>
      <Collapse header="Vendors">
        { vendors.map(mapVendors(filtersValues)) }
      </Collapse>
      <Collapse header="Car Specification">
        { SPECIFICS_LIST.map(mapping(filtersValues)) }
      </Collapse>
      <Collapse header="Seats">
        { SEAT_LIST.map(mapping(filtersValues)) }
      </Collapse>
      <Collapse header="Luggage">
        { BAGS_LIST.map(mapping(filtersValues)) }
      </Collapse>
    </Group>
  )
};

export default SearchFilter;
