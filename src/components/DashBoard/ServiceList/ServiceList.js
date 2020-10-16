import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import logo from'../../../images/logos/logo.png'
import { useEffect } from 'react';

const ServiceList = () => {
    const [loggedInUser,setLoggedInUser] =  useContext(UserContext)
    const [userServiceList,setUserServiceList] = useState([])

    useEffect(()=>{
        fetch('/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    },[])

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
                <h1>this is service List</h1>
            </div>     
        </div>     
    </section>
    );
};

export default ServiceList;