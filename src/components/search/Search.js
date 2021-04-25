import { useEffect } from 'react';
import format from 'date-fns/format';
import { LoadingOutlined } from '@ant-design/icons';
import  { Layout, Summary } from '@reusable';
import SearchFilter from '@components/search-filter';
import VehicleList from '@components/vehicle-list';

import { getSearchData } from './actions';
import { useDispatch, useSelector } from 'react-redux';

const { Sider, Content} = Layout;
const { Section, Separator } = Summary;


const generateDescription = (location, dateTime) => {
  if(dateTime){
    return `${location} - ${format(new Date(dateTime), 'HH:mm dd MMMM, yyyy')}`
  }
  return location;
};

const Search = () => {
  const dispatch = useDispatch();
  const { pickUp, dropOff, loading, loaded } = useSelector(state => state);

  useEffect(() => {
    if(!loaded){
      dispatch(getSearchData());
    }
  }, [dispatch, loaded]);

  return !loading ? (
    <>
      <Sider><SearchFilter /></Sider>
      <Content>
        <Summary>
          <Section title="Pick-up" description={generateDescription(pickUp.location, pickUp.date)} />
          <Separator />
          <Section title="Drop-off" description={generateDescription(dropOff.location, dropOff.date)} />
        </Summary>
        <VehicleList />
      </Content>
    </>
  )
  : <Content className="rac-search-loading"><LoadingOutlined className="rac-search-loading-icon"/></Content>;
};

export default Search;
