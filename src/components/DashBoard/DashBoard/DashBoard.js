import React, { useEffect } from 'react';
import logo from '../../../images/logos/logo.png'
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
import Order from '../Order/Order';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import ServiceList from '../OrderStatus/OrderStatus';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [admin, setAdmin] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:4000/admins')
        .then(res => res.json())
        .then(data =>{
            data.map(admin=>setAdmin(admin))
        })
    }, [])

   
    return (
        <section>
            {
                loggedInUser.email == admin.email ? <AdminServiceList></AdminServiceList> : <ServiceList></ServiceList>
            }
        </section>
    );
};

export default DashBoard;