import { render } from '@testing-library/react';
import Summary from '../Summary';

const { Section, Separator }  = Summary

describe('Testing Summary Components', () => {

  describe('testing Summary', () => {
    it('should render correctly', () => {
      const { container } = render(<Summary />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('testing Separator', () => {
    it('should render correctly', () => {
      const { container } = render(<Separator />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('testing Section', () => {
    it('should render correctly', () => {
      const { container } = render(<Section title="Title" description="description" />);
      expect(container).toMatchSnapshot();
    });
  });
});