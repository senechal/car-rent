import { useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import SearchFilter from '../SearchFilter';
import {
  APPLY_FILTER,
  REMOVE_FILTER,
} from '@utils/actionTypes';

const mockVendors = ['VENDOR 1', 'VENDOR 2', 'VENDOR 3'];

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe('Testing SearchFilter', () => {
  beforeEach(() => {
    useSelector.mockReset();
    mockDispatch.mockReset();
  });
  it('should render correctly', () => {
    useSelector.mockReturnValue({
      vendors: mockVendors,
      filters: [],
    });
    const { container } = render(<SearchFilter />);
    expect(container).toMatchSnapshot();
  });
  it('should render correctly with filters', () => {
    useSelector.mockReturnValue({
      vendors: mockVendors,
      filters: [{value: 'VENDOR 1', field: 'vendor', label: 'VENDOR 1'}],
    });
    const { container } = render(<SearchFilter />);
    expect(container).toMatchSnapshot();
  });
  it('should dispatch applyFilter on empty checkbox change', () => {
    useSelector.mockReturnValue({
      vendors: mockVendors,
      filters: [],
    });
    const filter = {value: 'VENDOR 1', field: 'vendor', label: 'VENDOR 1'};
    const { getAllByTestId } = render(<SearchFilter />);
    const [checkbox] = getAllByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(mockDispatch).toBeCalledWith({
      type: APPLY_FILTER,
      ...filter,
    });
  });
  it('should dispatch removeFilter on checked checkbox change', () => {
    useSelector.mockReturnValue({
      vendors: mockVendors,
      filters: [{value: 'VENDOR 1', field: 'vendor', label: 'VENDOR 1'}],
    });
    const filter = {value: 'VENDOR 1', field: 'vendor'};
    const { getAllByTestId } = render(<SearchFilter />);
    const [checkbox] = getAllByTestId('checkbox');
    fireEvent.click(checkbox);
    expect(mockDispatch).toBeCalledWith({
      type: REMOVE_FILTER,
      ...filter,
    });
  });
});
