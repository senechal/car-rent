import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Layout, Icons } from '@reusable';
import Details from '@components/details';
import Search from '@components/search';


const { CenterLayout, Header, Footer } = Layout;
const { CarLogo } = Icons

const App = () => {
  return (
    <Router>
      <Layout>
        <Header><span>Rent-a-car</span> <CarLogo /></Header>
        <CenterLayout>
          <Switch>
            <Route path="/details/:vehId">
              <Details />
            </Route>
            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </CenterLayout>
        <Footer>Footer</Footer>
      </Layout>
    </Router>
  )
}

export default App;
