import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AddService from './components/AddService/AddService';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrder from './components/ManageOrder/ManageOrder';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import About from './components/About/About';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import Header from './components/Share/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import NewOrder from './components/NewOrder/NewOrder';
import Services from './components/Services/Services';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/addservice'>
              <AddService></AddService>
            </Route>
            <PrivateRoute path='/myorders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path='/manageorder'>
              <ManageOrder></ManageOrder>
            </Route>
            <Route path='/neworder'>
              <NewOrder></NewOrder>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <Route path='/servicedetail/:id'>
              <ServiceDetail></ServiceDetail>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
