import { get } from 'axios';
import { SEARCH_PENDING, SEARCH_SUCCESS } from '@utils/actionTypes';
const SEARCH_URL = 'http://www.cartrawler.com/ctabe/cars.json';

const parseVehicle = (item, vendor, index) => {
  const {
    '@Status': status,
    Vehicle: {
      "@AirConditionInd": hasAirConditioning,
      "@TransmissionType": transmissionType,
      "@FuelType": fuelType,
      "@PassengerQuantity": seats,
      "@BaggageQuantity": baggageQuantity,
      "@DoorCount": doors,
      VehMakeModel: {
        "@Name": makeModel
      },
      PictureURL: imgUrl,
    },
    TotalCharge: {
      "@RateTotalAmount": price,
      "@CurrencyCode": currencyCode,

    }
  } = item;

  return {
    id: `${vendor}_${index}`,
    status,
    hasAirConditioning: hasAirConditioning === 'true',
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
  }
}

const parseData = (data) => {
  const {
    VehAvailRSCore: {
      VehRentalCore: rentalInfo,
      VehVendorAvails: vendorInfo,
    }
  } = data

  const pickUp = {
    date: rentalInfo?.['@PickUpDateTime'] || '',
    location: rentalInfo?.PickUpLocation?.['@Name'] || '',
  };
  const dropOff = {
    date: rentalInfo?.['@ReturnDateTime'] || '',
    location: rentalInfo?.ReturnLocation?.['@Name'] || '',
  }

  const {
    vendors,
    vehicles,
  } = vendorInfo.reduce((acc, vendor) => {
    const {
      Vendor: {
        '@Name': name,
      },
      VehAvails: vendorVehicles,
    } = vendor;

    return {
      vendors: [...acc.vendors, name],
      vehicles: [...acc.vehicles , ...vendorVehicles.map(((item, index) => ({...parseVehicle(item, name, index)})))]
    };

  }, {vendors: [], vehicles: []})
    return { pickUp, dropOff, vendors, vehicles };
}

export const getSearchData = () => {
  return async dispatch => {
    dispatch({ type: SEARCH_PENDING });
    const { data: payload } = await get(SEARCH_URL);
    const [data] = payload;
    dispatch({
      type: SEARCH_SUCCESS,
      ...parseData(data),
    });
  };
};
