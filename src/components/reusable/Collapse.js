import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { useState, useCallback } from 'react';
import CollapsibleDiv from 'react-collapse';

const Collapse = ({ header, children, ...props }) => {
  const [collapse, setCollapse] = useState(false);
  const toggleCollapse = useCallback(() => {
    setCollapse(curr => !curr);
  }, [setCollapse]);

  return (
    <div {...props}>
      <div className="rac-collapse-header" onClick={toggleCollapse} >
        {header}
        {
          collapse
           ? <DownOutlined className="rac-collapse-indicator" />
           : <UpOutlined className="rac-collapse-indicator" />
        }
      </div>
      <CollapsibleDiv isOpened={!collapse} theme={{collapse: 'rac-collapse-body', content: 'rac-collapse-content'}} >
        {children}
      </CollapsibleDiv>
    </div>
  )
}

export default Collapse;