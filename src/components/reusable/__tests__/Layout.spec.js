import { render } from '@testing-library/react';
import * as components from '../Layout';

describe('Testing Layout Components', () => {

  Object.keys(components).forEach((componentName) => {
    it(`should render ${componentName} correctly`, () => {
        const Component = components[componentName];
        const { container } = render(<Component />);
        expect(container).toMatchSnapshot();
    });
  });
});