import { useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import VehicleList from '../VehicleList';
import {
  CHANGE_SORT_BY,
  REMOVE_FILTER,
} from '@utils/actionTypes';

const mockVehicles = [
  {
    baggageQuantity: '2',
    currencyCode: 'CAD',
    doors: '2',
    fuelType: 'Petrol',
    hasAirConditioning: true,
    id: 'HERTZ_1',
    imgUrl: 'https://ctimg-fleet.cartrawler.com/kia/rio/primary.png?auto=format&w=600',
    makeModel: 'Kia Rio or similar',
    price: '731.47',
    seats: '5',
    status: 'Available',
    transmissionType: 'Automatic',
    vendor: 'HERTZ',
  },
  {
    baggageQuantity: '4',
    currencyCode: 'CAD',
    doors: '4',
    fuelType: 'Petrol',
    hasAirConditioning: true,
    id: 'AVIS_0',
    imgUrl: 'https://ctimg-fleet.cartrawler.com/chevrolet/impala/primary.png?auto=format&w=600',
    makeModel: 'Chevrolet Impala or similar',
    price: '836.25',
    seats: '5',
    status: 'Available',
    transmissionType: 'Automatic',
    vendor: 'AVIS',
  },
  {
    baggageQuantity: '4',
    currencyCode: 'CAD',
    doors: '4',
    fuelType: 'Petrol',
    hasAirConditioning: true,
    id: 'ALAMO_1',
    imgUrl: 'https://ctimg-fleet.cartrawler.com/chrysler/300/primary.png?auto=format&w=600',
    makeModel: 'Chrysler 300 or similar',
    price: '851.03',
    seats: '5',
    status: 'Available',
    transmissionType: 'Automatic',
    vendor: 'ALAMO',
  },
];

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('react-router-dom', () => ({
  Link: ({children, to}) => <a href={to}>{children}</a>,
}));

describe('Testing VehicleList', () => {
  beforeEach(() => {
    useSelector.mockReset();
    mockDispatch.mockReset();
  });
  it('should render correctly', () => {
    useSelector.mockReturnValue({
      filters: [],
      vehicles: mockVehicles,
      sortBy: {
        key: 'price',
        order: 'asc',
      },
    });
    const { container } = render(<VehicleList />);
    expect(container).toMatchSnapshot();
  });
  it('should render correctly changing sortBy', () => {
    useSelector.mockReturnValue({
      filters: [],
      vehicles: mockVehicles,
      sortBy: {
        key: 'doors',
        order: 'asc',
      },
    });
    const { container } = render(<VehicleList />);
    expect(container).toMatchSnapshot();
  });
  it('should render correctly adding filter', () => {
    useSelector.mockReturnValue({
      filters: [{value: 'AVIS', field: 'vendor', label: 'AVIS'}],
      vehicles: mockVehicles,
      sortBy: {
        key: 'doors',
        order: 'asc',
      },
    });
    const { container } = render(<VehicleList />);
    expect(container).toMatchSnapshot();
  });
  it('should dispatch removeFilter tag click', () => {
    useSelector.mockReturnValue({
      filters: [{value: 'AVIS', field: 'vendor', label: 'AVIS'}],
      vehicles: mockVehicles,
      sortBy: {
        key: 'doors',
        order: 'asc',
      },
    });
    const filter = {value: 'AVIS', field: 'vendor'};
    const { getAllByTestId } = render(<VehicleList />);
    const [tag] = getAllByTestId('tag');
    fireEvent.click(tag);
    expect(mockDispatch).toBeCalledWith({
      type: REMOVE_FILTER,
      ...filter,
    });
  });
  it('should dispatch changeSortBy tag click', () => {
    useSelector.mockReturnValue({
      filters: [{value: 'AVIS', field: 'vendor', label: 'AVIS'}],
      vehicles: mockVehicles,
      sortBy: {
        key: 'doors',
        order: 'asc',
      },
    });
    const sort = {key:'doors', order: 'asc'};
    const { getByTestId } = render(<VehicleList />);
    const select = getByTestId('sort-select');
    fireEvent.change(select);
    expect(mockDispatch).toBeCalledWith({
      type: CHANGE_SORT_BY,
      ...sort,
    });
  });
});
