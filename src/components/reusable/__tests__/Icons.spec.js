import { render } from '@testing-library/react';
import icons from '../Icons';

describe('Testing Icons', () => {
  Object.keys(icons).forEach((iconName) => {
    it(`should render ${iconName} correctly`, () => {
        const Component = icons[iconName];
        const { container } = render(<Component />);
        expect(container).toMatchSnapshot();
    });
  });
});