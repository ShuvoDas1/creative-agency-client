import React, { useEffect } from 'react';
import logo from '../../../images/logos/logo.png'
import { useState } from 'react';
import { useContext } from 'react';
import AdminServiceList from '../AdminServiceList/AdminServiceList';
import ServiceList from '../OrderStatus/OrderStatus';
import { UserContext } from '../../../App';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [admin, setAdmin] = useState([]);
    
    useEffect(()=>{
        fetch('https://secure-bastion-91408.herokuapp.com/admins')
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