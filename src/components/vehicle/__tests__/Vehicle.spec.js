import { render } from '@testing-library/react';
import Vehicle from '../Vehicle';

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

jest.mock('react-router-dom', () => ({
  Link: ({children, to}) => <a href={to}>{children}</a>,
}));

describe('Testing Vehicle', () => {
  it('should render correctly', () => {
    const { container } = render(<Vehicle {...mockVehicle}/>);
    expect(container).toMatchSnapshot();
  });
});
