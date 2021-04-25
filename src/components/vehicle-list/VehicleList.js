
import { SORT_OPTION } from './constants'
import { Tag } from '@reusable';
import Vehicle from '@components/vehicle';
import { removeFilter } from '@components/search-filter/actions';
import { useDispatch, useSelector } from 'react-redux';
import { changeSortBy } from './actions';
import { useCallback } from 'react';

const { Group } = Tag;

const mergeFilters = (filters) => {
  return filters.reduce((acc, filter) => {
    const { field } = filter;
    if(acc[field]){
      acc[field] = [...acc[field], filter];
      return acc
    }
    acc[field] = [filter];
    return acc;
  }, {});
};

const sortVehicles = (sortBy, order) => (vehA, vehB) => {
  const isAsc = order === 'asc';

  const {
    [sortBy]: valA,
  } = vehA;
  const {
    [sortBy]: valB,
  } = vehB;

  if (parseInt(valA, 10) < parseInt(valB, 10)) {
    return isAsc ? -1 : 1;
  }
  if (parseInt(valA, 10) > parseInt(valB, 10)) {
    return isAsc ? 1 : -1;
  }

  return 0;
};

const VehicleList = () => {

  const {
    filters,
    vehicles,
    sortBy: {
      key: sortBy,
      order,
    },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const mergedFilters = mergeFilters(filters)

  const filteredVehicles = Object.keys(mergedFilters).reduce((acc, field) => {
    const fieldFielters = mergedFilters[field];
    return acc.filter(({[field]: key}) => {
      return fieldFielters.some(toFilter => {
        return key === toFilter.value;
      });
    });
  }, vehicles);

  const sortedVehicles = filteredVehicles.sort(sortVehicles(sortBy, order));

  const handleSortByChange = useCallback((event) => {
    const { value } = event.target;
    const [eventSortBy, eventOrder] = value.split(':');
    dispatch(changeSortBy(eventSortBy, eventOrder));
  }, [dispatch]);

  const handleRemoveFilter = useCallback((tagValue) => {
    const [field, value] = tagValue.split(':');
    dispatch(removeFilter(field, value));
  }, [dispatch]);

  return (
    <>
      <section className="rac-vehicle-list-header">
        <Group
          onClose={handleRemoveFilter}
          className="rac-vehicle-list-applied-filters"
        >
          Filters applied: {filters.map(({value, field, label}) => (
            <Tag value={`${field}:${value}`} key={label}>{label}</Tag>
          ))}
        </Group>
        <section className="rac-vehicle-list-sort-by">
          <label> Sort By: </label>
          <select onChange={handleSortByChange} value={`${sortBy}:${order}`}>
            {SORT_OPTION.map(({label, sortBy:optSortBy, order:optOrder }) => {
              return (
                <option value={`${optSortBy}:${optOrder}`} key={label}>{label}</option>
              )
            })}
          </select>
        </section>
      </section>
      {
        sortedVehicles.map(vehicle => {
          const { id } = vehicle;
          return <Vehicle key={id} {...vehicle} />
        })
      }
    </>
  );
};

export default VehicleList;
