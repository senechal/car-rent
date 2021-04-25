import { render, fireEvent } from '@testing-library/react';
import Collapse from '../Collapse';

describe('Testing Collapse', () => {
  it('should render correctly', () => {
    const { container } = render(<Collapse header="collapse">content</Collapse>);
    expect(container).toMatchSnapshot();
  });
  it('should call onClose when clicked', () => {
    const { getByTestId, container } = render(<Collapse header="collapse">content</Collapse>);
    const collapse = getByTestId('collapse');
    fireEvent.click(collapse);
    expect(container).toMatchSnapshot();
  });
});