import { render, fireEvent } from '@testing-library/react';
import Checkbox from '../Checkbox';

const { Group } = Checkbox;

describe('Testing Checkbox Components', () => {
  describe('Testing Tag', () => {
    it('should render correctly', () => {
      const { container } = render(<Checkbox value="value">label</Checkbox>);
      expect(container).toMatchSnapshot();
    });
    it('should render correctly with checked true', () => {
      const { container } = render(<Checkbox value="value" checked>label</Checkbox>);
      expect(container).toMatchSnapshot();
    });
    it('should render correctly with checked false', () => {
      const { container } = render(<Checkbox value="value" checked={false}>label</Checkbox>);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Testing Group', () => {
    it('should render correctlys', () => {
      const { container } = render(<Group><Checkbox value="value">content</Checkbox></Group>);
      expect(container).toMatchSnapshot();
    });
    it('should call onClose when clicked', () => {
      const callback = jest.fn();
      const { getByTestId } = render(<Group onChange={callback}><Checkbox value="value">content</Checkbox></Group>);
      const tag = getByTestId('checkbox');
      fireEvent.click(tag);
      expect(callback).toBeCalledWith('value');
    });
  });
});