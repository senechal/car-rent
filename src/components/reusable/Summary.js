import PropTypes from 'prop-types'
import { RightOutlined } from '@ant-design/icons';
import Base from './Base';

const Summary = (props) => <Base defaultCls="rac-summary" {...props} />;
const Section = ({title, description, ...props}) => {
    return (
        <Base defaultCls="rac-summary-section" {...props}>
            <div className="rac-summary-section-detail">
                <div className="rac-summary-section-title">{title}</div>
                <div className="rac-summary-section-description">{description}</div>
            </div>
        </Base>
    );
};

const Separator = () => <RightOutlined className="rac-summary-separator" />

Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

Summary.Section = Section;
Summary.Separator = Separator;

export default Summary;
