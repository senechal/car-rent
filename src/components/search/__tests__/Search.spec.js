import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import Search from '../Search';

const mockDispatch = jest.fn();

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

jest.mock('react-router-dom', () => ({
  Link: ({children, to}) => <a href={to}>{children}</a>,
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

jest.mock('../actions', () =>( {
  getSearchData: jest.fn(),
}));

describe('Testing Search', () => {
  it('should render correctly while loading', () => {
    useSelector.mockReturnValue({
      pickUp: {},
      dropOff: {},
      loading: true,
      loaded: false,

    });
    const { container } = render(<Search />);
    expect(mockDispatch).toBeCalled();
    expect(container).toMatchSnapshot();
  });
  it('should render correctly after loading', () => {
    useSelector.mockReturnValue({
      pickUp: {
        date: '1987-05-15',
        location: 'mock pickup',
      },
      dropOff: {
        date: '1987-05-15',
        location: 'mock drop off',
      },
      vendors: ['HERTZ', 'AVIS', 'ALAMO'],
      vehicles: mockVehicles,
      loading: false,
      sortBy: {
        key: 'price',
        order: 'asc',
      },
      filters: [],
      loaded: true,
    });
    const { container } = render(<Search />);
    expect(container).toMatchSnapshot();
  });
});
