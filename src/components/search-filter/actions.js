import {
  APPLY_FILTER,
  REMOVE_FILTER,
} from '@utils/actionTypes';

export const applyFilter = (field, value, label) => {
  return {
    type: APPLY_FILTER,
    field, value, label,
  };
};

export const removeFilter = (field, value) => {
  return {
    type: REMOVE_FILTER,
    field, value,
  };
};
