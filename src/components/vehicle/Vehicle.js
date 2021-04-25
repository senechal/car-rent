import PropTypes from 'prop-types';
import { Icons } from '@reusable';
import {
  Link
} from 'react-router-dom';
import {
  VENDOR_LOGOS,
} from './constants'
const {
  AcIcon,
  DoorIcon,
  FuelIcon,
  AutomaticGear,
  ManualGear,
  SeatIcon,
  BagIcon,
} = Icons;


const formatPrice = (price, code) => {
  return new Intl.NumberFormat('en-UK',
    { style: 'currency', currency: code }
  ).format(price);
};

const Vehicle = (props) => {

  const {
    id,
    status,
    hasAirConditioning,
    transmissionType,
    fuelType,
    vendor,
    seats,
    baggageQuantity,
    doors,
    makeModel,
    imgUrl,
    price,
    currencyCode,
  } = props;

  const [name, similar] = makeModel.split(' or ');

  return (
    <section className="rac-vehicle">
      <div className="rac-vehicle-content">
        <div className="rac-vehicle-img">
          <Link to={`/details/${id}`}><img src={imgUrl} alt={makeModel} /></Link>
        </div>
        <div className="rac-vehicle-info">
          <div className="rac-vehicle-make-model">
            <Link to={`/details/${id}`}><strong>{name}</strong> or {similar} ({status})</Link>
          </div>
          <div className="rac-vehicle-features">
            <span><SeatIcon /> {seats} seats </span>
            <span><DoorIcon /> {doors} doors </span>
          </div>
          <div className="rac-vehicle-features">
            <span><BagIcon /> {baggageQuantity} bags </span>
            <span><AcIcon /> { hasAirConditioning ? 'Air Conditioning' : '-' } </span>
          </div>
          <div className="rac-vehicle-features">
            <span><FuelIcon /> {fuelType} </span>
            {
              transmissionType === 'Automatic'
                ? <span><AutomaticGear /> Automatic Transmission</span>
                : <span><ManualGear /> Manual Transmission</span>
            }
          </div>
        </div>
        <div className="rac-vehicle-pricing">
          {formatPrice(price, currencyCode)}
        </div>
      </div>
      <div className="rac-vehicle-vendor">
        <strong>Vendor: </strong>
        <img src={VENDOR_LOGOS[vendor]} alt={vendor} />
      </div>
    </section>
  )
};

Vehicle.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  hasAirConditioning: PropTypes.bool.isRequired,
  transmissionType: PropTypes.string.isRequired,
  fuelType: PropTypes.string.isRequired,
  vendor: PropTypes.string.isRequired,
  seats: PropTypes.string.isRequired,
  baggageQuantity: PropTypes.string.isRequired,
  doors: PropTypes.string.isRequired,
  makeModel: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
};

export default Vehicle;