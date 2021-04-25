import { render } from '@testing-library/react';
import App from '../App';

jest.mock('@components/details', () => () => 'Details');
jest.mock('@components/search', () => () => 'Search');

describe('Testing App', () => {
  it('should render correctly', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
