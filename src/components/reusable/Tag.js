import { useCallback } from 'react';
import PropTypes from 'prop-types';
const Tag = ({ value, ...props }) => (
  <span className="rac-tag" data-testid="tag" {...props} data-tagvalue={value} />
);

Tag.propTypes = {
  value: PropTypes.string.isRequired,
};

const Group = ({ onClose, ...props }) => {
  const handleBubbleClick = useCallback((event) => {
    const { tagvalue: value } = event.target.dataset;
    if (value) {
      onClose(value);
    }
  }, [onClose]);
  return <section {...props} onClick={handleBubbleClick} />
};

Group.propTypes = {
  onClose: PropTypes.func,
};
Group.defaultProps = {
  onClose: Function.prototype,
};

Tag.Group = Group;

export default Tag;
