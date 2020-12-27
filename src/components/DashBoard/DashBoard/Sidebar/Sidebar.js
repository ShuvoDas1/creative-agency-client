import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingBag, faCommentAlt, faPlus, faUserPlus,faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { UserContext } from '../../../../App';

// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

    const handleLogout = () =>{
        setLoggedInUser({});
        sessionStorage.clear();
    }

    console.log(loggedInUser);

    return (
        <div className='sidebar-main'>
            <ul>

                <Link to='/dashboard/order' style={{ textDecoration: 'none' }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faCartPlus}></FontAwesomeIcon>Order</li>
                </Link>
                <Link to='/serviceList' style={{ textDecoration: 'none' }}>
                    <li className='my-3'> <FontAwesomeIcon className='mr-1' icon={faShoppingBag}></FontAwesomeIcon>Service List</li>
                </Link>
                <Link to='/review' style={{ textDecoration: 'none' }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faCommentAlt}></FontAwesomeIcon>Review</li>
                </Link>
                <Link to='/addService' style={{ textDecoration: 'none' }}>
                    <li className='my-3'> <FontAwesomeIcon className='mr-1' icon={faPlus}></FontAwesomeIcon>Add Service</li>
                </Link>
                <Link to='/makeAdmin' style={{ textDecoration: 'none' }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faUserPlus}></FontAwesomeIcon>Make Admin</li>
                </Link>
                <hr/>
                <Link to='/' onClick={handleLogout} style={{ textDecoration: 'none' }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faSignOutAlt}></FontAwesomeIcon>Log out</li>
                </Link>
            </ul>
           
        </div>

    );
};

export default Sidebar;