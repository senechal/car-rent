import { get } from 'axios';
import { getSearchData } from '../actions';
import { SEARCH_PENDING, SEARCH_SUCCESS, SEARCH_ERROR } from '@utils/actionTypes';

const mockDataRequest = {
  data:[
    {
      "VehAvailRSCore": {
        "VehRentalCore": {
          "@PickUpDateTime": "2020-03-22T10:00:00Z",
          "@ReturnDateTime": "2020-04-06T10:00:00Z",
          "PickUpLocation": {
            "@Name": "Las Vegas - Airport"
          },
          "ReturnLocation": {
            "@Name": "Las Vegas - Airport"
          }
        },
        "VehVendorAvails": [
          {
            "Vendor": {
              "@Code": "125",
              "@Name": "ALAMO"
            },
            "VehAvails": [
              {
                "@Status": "Available",
                "Vehicle": {
                  "@AirConditionInd": "true",
                  "@TransmissionType": "Automatic",
                  "@FuelType": "Petrol",
                  "@DriveType": "Unspecified",
                  "@PassengerQuantity": "5+",
                  "@BaggageQuantity": "3",
                  "@Code": "IFAR",
                  "@CodeContext": "CARTRAWLER",
                  "@DoorCount": "5",
                  "VehMakeModel": {
                    "@Name": "Toyota Rav4 or similar"
                  },
                  "PictureURL": "mock_img_url"
                },
                "TotalCharge": {
                  "@RateTotalAmount": "878.98",
                  "@EstimatedTotalAmount": "878.98",
                  "@CurrencyCode": "CAD"
                }
              },
            ]
          },
        ]
      }
    }
  ]
};

jest.mock('axios', () => ({
  get: jest.fn(),
}));

describe('Tests for Search actions', () => {
  describe('getSearchData', () => {
    it('should dispatch loading and succcess actions', async () => {
      get.mockResolvedValueOnce(mockDataRequest);
      const dispatch = jest.fn();
      await getSearchData()(dispatch);
      expect(dispatch).toBeCalledWith({type: SEARCH_PENDING});
      expect(dispatch).toBeCalledWith({
        type: SEARCH_SUCCESS,
          pickUp: {
            date: '2020-03-22T10:00:00Z',
            location: 'Las Vegas - Airport'
          },
          dropOff: {
            date: '2020-04-06T10:00:00Z',
            location: 'Las Vegas - Airport'
          },
          vendors: ['ALAMO'],
          vehicles: [
            {
              id: 'ALAMO_0',
              status: 'Available',
              hasAirConditioning: true,
              transmissionType: 'Automatic',
              fuelType: 'Petrol',
              vendor: 'ALAMO',
              seats: '5+',
              baggageQuantity: '3',
              doors: '5',
              makeModel: 'Toyota Rav4 or similar',
              imgUrl: 'mock_img_url',
              price: '878.98',
              currencyCode: 'CAD',
            }
          ]
      });
    });
    it('should dispatch loading and error on failed request', async () => {
      const error = new Error('error');
      get.mockRejectedValueOnce(error);

      const dispatch = jest.fn();
      await getSearchData()(dispatch);
      expect(dispatch).toBeCalledWith({type: SEARCH_PENDING});
      expect(dispatch).toBeCalledWith({
        type: SEARCH_ERROR,
        err: error,
      });
    });
  });
});