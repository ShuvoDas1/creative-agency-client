import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingBag, faCommentAlt, faPlus, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'
import { UserContext } from '../../../../App';

// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {

    const { serviceId } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedService, setSelectedService] = useState([])

    useEffect(() => {
        fetch('https://secure-bastion-91408.herokuapp.com/services/' + serviceId)
            .then(res => res.json())
            .then(data => setSelectedService(data[0]))
    }, [])

    const handleLogout = () => {
        setLoggedInUser({});
        sessionStorage.clear();
    }


    return (
        <div className='sidebar-main'>
            <ul>

                {/* <Link to={'/order/' + serviceId} style={{ textDecoration: "none" }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faCartPlus}></FontAwesomeIcon>Order</li>
                </Link> */}
                <Link to='/user/orderstatus' style={{ textDecoration: "none" }}>
                    <li className='my-3'> <FontAwesomeIcon className='mr-1' icon={faShoppingBag}></FontAwesomeIcon>Service List</li>
                </Link>
                <Link to='/review' style={{ textDecoration: "none" }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faCommentAlt}></FontAwesomeIcon>Review</li>
                </Link>
                <hr />
                <Link to='/' onClick={handleLogout} style={{ textDecoration: 'none' }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faSignOutAlt}></FontAwesomeIcon>Log out</li>
                </Link>
            </ul>

        </div>

    );
};

export default Sidebar;