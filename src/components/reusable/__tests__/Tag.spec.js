import { render, fireEvent } from '@testing-library/react';
import Tag from '../Tag';

const { Group } = Tag;

describe('Testing Tag Components', () => {
  describe('Testing Tag', () => {
    it('should render correctly', () => {
      const { container } = render(<Tag value="value">content</Tag>);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Testing Group', () => {
    it('should render correctlys', () => {
      const { container } = render(<Group><Tag value="value">content</Tag></Group>);
      expect(container).toMatchSnapshot();
    });
    it('should call onClose when clicked', () => {
      const callback = jest.fn();
      const { getByTestId } = render(<Group onClose={callback}><Tag value="value">content</Tag></Group>);
      const tag = getByTestId('tag');
      fireEvent.click(tag);
      expect(callback).toBeCalledWith('value');
    });
  });
});