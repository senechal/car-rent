import {
  Link,
  useParams,
  Redirect,
} from 'react-router-dom';
import { DoubleLeftOutlined } from '@ant-design/icons';
import Vehicle from '@components/vehicle';
import { useSelector } from 'react-redux';
import  { Layout } from '@reusable';

const { Content } = Layout;

const Details = () => {
  const { vehId } = useParams();
  const vehicles = useSelector(state => state.vehicles);
  const vehicle = vehicles.find(veh => veh.id === vehId);


  return vehicles.length !== 0 && vehicle ? (
    <Content className="rac-details-content">
      <div className="rac-details-navigation">
        <Link to='/'> <DoubleLeftOutlined /> Go Back</Link>
      </div>
      <Vehicle {...vehicle}/>
    </Content>
  )
  : <Redirect to="/" />
};

export default Details;
