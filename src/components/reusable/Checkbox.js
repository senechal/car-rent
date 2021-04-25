import { useCallback } from 'react';
import PropTypes from 'prop-types';
const Checkbox = ({ value, children, checked, ...props }) => {
  return (
    <label {...props} className="rac-checkbox-label" data-checkboxvalue={value} data-testid="checkbox">
      <input type="checkbox" className="rac-checkbox-input" value={value} checked={checked} readOnly />
      {children}
    </label>
  );
};
Checkbox.propTypes = {
  value: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};
Checkbox.defaultProps = {
  checked: undefined,
};

const Group = ({ onChange, ...props }) => {
  const handleBubbleClick = useCallback((event) => {
    const { checkboxvalue: value } = event.target.dataset;
    if (value) {
      onChange(value);
    }
  }, [onChange]);
  return <section {...props} onClick={handleBubbleClick} />;
};

Group.propTypes = {
  onChange: PropTypes.func,
};
Group.defaultProps = {
  onChange: Function.prototype,
};

Checkbox.Group = Group;

export default Checkbox;
