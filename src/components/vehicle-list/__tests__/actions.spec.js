import {
  CHANGE_SORT_BY
} from '@utils/actionTypes';
import { changeSortBy } from '../actions';

describe('Tests for vehicle-list actions', () => {
  const key = 'key';
  const order = 'order';

  describe('applyFilter', () => {
    it('should return action', () => {
      const action = changeSortBy(key, order);
      expect(action).toEqual({
        type: CHANGE_SORT_BY,
        key, order,
      });
    });
  });
});