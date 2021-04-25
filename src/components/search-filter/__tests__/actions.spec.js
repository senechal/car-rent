import {
  APPLY_FILTER,
  REMOVE_FILTER,
} from '@utils/actionTypes';
import { applyFilter, removeFilter } from '../actions';

describe('Tests for search-filter actions', () => {
  const field = 'field';
  const value = 'value';
  const label = 'label';

  describe('applyFilter', () => {
    it('should return action', () => {
      const action = applyFilter(field, value, label);
      expect(action).toEqual({
        type: APPLY_FILTER,
        field, value, label,
      });
    });
  });
  describe('removeFilter', () => {
    it('should return action', () => {
      const action = removeFilter(field, value);
      expect(action).toEqual({
        type: REMOVE_FILTER,
        field, value,
      });
    });
  });
});