import React, { useEffect } from 'react';
import logo from'../../../images/logos/logo.png'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Sidebar from './Sidebar/Sidebar';
import Order from '../Order/Order';

const DashBoard = () => {
    const [loggedInUser,setLoggedInUser] =  useContext(UserContext)
    
    
    
    return (
        <section style={{height:'100%'}}>
        <div className='d-flex justify-content-between p-3' >
            <img src={logo} className='img-fluid' style={{ width: "100px", height: "50px" }}alt=""/>
            <h5>Order</h5>
            <h5>{loggedInUser.name}</h5>
        </div>
        <div className='row'>
            <div className="col-md-2">
                <Sidebar></Sidebar>   
            </div>
            <div className="col-md-8">
                <Order></Order>
            </div>     
        </div>     
    </section>
    );
};

export default DashBoard;