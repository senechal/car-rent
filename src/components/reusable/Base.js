import classNames from 'classnames';
import PropTypes from 'prop-types';

const Base = ({className, defaultCls, as: Tag, ...props}) => {
  return <Tag className={classNames(defaultCls, className)} {...props} />
};

Base.propTypes = {
  defaultCls: PropTypes.string.isRequired,
  as: PropTypes.string,
  className: PropTypes.string,
};

Base.defaultProps = {
  as: 'div',
  className: '',
};

export default Base;