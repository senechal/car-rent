import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import Details from '../Details';

const mockVehicle = {
  baggageQuantity: "2",
  currencyCode: "CAD",
  doors: "2",
  fuelType: "Petrol",
  hasAirConditioning: true,
  id: "HERTZ_1",
  imgUrl: "https://ctimg-fleet.cartrawler.com/kia/rio/primary.png?auto=format&w=600",
  makeModel: "Kia Rio or similar",
  price: "731.47",
  seats: "5",
  status: "Available",
  transmissionType: "Automatic",
  vendor: "HERTZ",
};

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useParams: () => ({vehId: mockVehicle.id}),
  Redirect: () => '<Redirect to="/">',
  Link: ({children, to}) => <a href={to}>{children}</a>,
}));

describe('Testing App', () => {
  it('should render correctly', () => {
    useSelector.mockReturnValueOnce([mockVehicle])
    const { container } = render(<Details />);
    expect(container).toMatchSnapshot();
  });
  it('should render correctly empty', () => {
    useSelector.mockReturnValueOnce([])
    const { container } = render(<Details />);
    expect(container).toMatchSnapshot();
  });
});
