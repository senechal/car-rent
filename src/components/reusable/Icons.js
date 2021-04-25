
import Icon from '@ant-design/icons';
import { ReactComponent as AcSvg } from '@assets/img/ac.svg';
import { ReactComponent as AutomaticSvg } from '@assets/img/automatic.svg';
import { ReactComponent as ManualSvg } from '@assets/img/manual.svg';
import { ReactComponent as DoorSvg } from '@assets/img/doors.svg';
import { ReactComponent as FuelSvg } from '@assets/img/fuel.svg';
import { ReactComponent as SeatSvg } from '@assets/img/seats.svg';
import { ReactComponent as BagSvg } from '@assets/img/bag.svg';
import { ReactComponent as CarSvg } from '@assets/img/car.svg';


const AcIcon = props => <Icon className="rac-icon" component={AcSvg} {...props} />;
const DoorIcon = props => <Icon className="rac-icon" component={DoorSvg} {...props} />;
const FuelIcon = props => <Icon className="rac-icon" component={FuelSvg} {...props} />;
const AutomaticGear = props => <Icon className="rac-icon" component={AutomaticSvg} {...props} />;
const ManualGear = props => <Icon className="rac-icon" component={ManualSvg} {...props} />;
const SeatIcon = props => <Icon className="rac-icon" component={SeatSvg} {...props} />;
const BagIcon = props => <Icon className="rac-icon" component={BagSvg} {...props} />;
const CarLogo = props => <Icon className="rac-car-logo" component={CarSvg} {...props} />;

const icons = {
  AcIcon,
  DoorIcon,
  FuelIcon,
  AutomaticGear,
  ManualGear,
  SeatIcon,
  BagIcon,
  CarLogo,
};

export default icons;
