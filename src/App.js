import React, { createContext } from 'react';
import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import { useState } from 'react';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/DashBoard/Order/Order';
import OrderStatus from './components/DashBoard/OrderStatus/OrderStatus';
import Review from './components/DashBoard/Review/Review';
import AddService from './components/DashBoard/AddService/AddService';
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: 'shuvo0381@gmail.com',
    name: 'shuvo Das'
  })

  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/order/:serviceId'>
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path='/review'>
              <Review></Review>
            </PrivateRoute>
            <PrivateRoute path='/order'>
              <DashBoard></DashBoard>
            </PrivateRoute>
            <PrivateRoute path='/serviceList'>
              <OrderStatus></OrderStatus>
            </PrivateRoute>
            <PrivateRoute path='/addService'>
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
 
  );
}

export default App;
