import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png'
import { useEffect } from 'react';
import OrderStatusCard from './OrderStatusCard';
import './OrderStatus.css';
import { Link } from 'react-router-dom';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [userServiceList, setUserServiceList] = useState([])
    useEffect(() => {
        fetch('https://secure-bastion-91408.herokuapp.com/serviceListByEmail?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setUserServiceList(data);
            })
    }, [])
   
    return (
        <section className='service-list-main'>
            <div className='d-flex justify-content-between p-3' >
                <Link to='/'><img src={logo}  className='img-fluid' alt="" /></Link>
                <h5>SERVICE LIST</h5>
                <h5>{loggedInUser.name}</h5>
            </div>
            <div className='row'>
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 service-list-details">

                    <div className="row">
                        {
                            userServiceList.map(service => <OrderStatusCard key={service._id} service={service}></OrderStatusCard>)
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceList;