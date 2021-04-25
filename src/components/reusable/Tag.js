import { useCallback } from 'react';
import PropTypes from 'prop-types';
const Tag = ({ value, ...props }) => (
  <span className="rac-tag" {...props} data-tagvalue={value} />
);

const Group = ({ onClose, ...props }) => {
  const handleBubbleClick = useCallback((event) => {
    const { tagvalue: value } = event.target.dataset;
    if (value) {
      onClose(value, event);
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