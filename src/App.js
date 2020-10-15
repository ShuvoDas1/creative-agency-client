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


export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  const [services,setServices] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser],[services,setServices]}>
      <h1>Email:{loggedInUser.email}</h1>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/dashboard'>
              <DashBoard></DashBoard>
          </PrivateRoute>  
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
