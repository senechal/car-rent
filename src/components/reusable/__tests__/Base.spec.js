import { render } from '@testing-library/react';
import Base from '../Base';

describe('Testing Base', () => {
  it('should render correctly for a defaultClass', () => {
    const { container } = render(<Base defaultCls="base-class" />);
    expect(container).toMatchSnapshot();
  });
  it('should render correctly as a section', () => {
    const { container } = render(<Base defaultCls="base-class" as="section" />);
    expect(container).toMatchSnapshot();
  });
  it('should render correctly with an other className', () => {
    const { container } = render(<Base defaultCls="base-class" className="other-class" />);
    expect(container).toMatchSnapshot();
  });
});
