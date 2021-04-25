import {
  SEARCH_PENDING,
  SEARCH_SUCCESS,
  CHANGE_SORT_BY,
  APPLY_FILTER,
  REMOVE_FILTER,
} from '@utils/actionTypes';

export const initialState = {
  pickUp: {
    date: '',
    location: '',
  },
  dropOff: {
    date: '',
    location: '',
  },
  vendors: [],
  vehicles: [],
  loading: true,
  sortBy: { key: 'price', order: 'asc' },
  filters: [],
  loaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_PENDING:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_SUCCESS: {
      return {
        ...state,
        loaded: true,
        loading: false,
        vendors: action.vendors,
        vehicles: action.vehicles,
        pickUp: action.pickUp,
        dropOff: action.dropOff,
      };
    }
    case CHANGE_SORT_BY: {
      return {
        ...state,
        sortBy: {
          key: action.key,
          order: action.order,
        },
      };
    }
    case APPLY_FILTER: {
      return {
        ...state,
        filters: [
          ...state.filters,
          {
            field: action.field,
            value: action.value,
            label: action.label,
          }
        ]
      }
    }
    case REMOVE_FILTER: {
      const filters = state.filters.filter(({field, value}) => {
        return field !== action.field || value !== action.value;
      });
      return {
        ...state,
        filters,
      };
    }
    default:
      return state
  }
}

export default reducer;