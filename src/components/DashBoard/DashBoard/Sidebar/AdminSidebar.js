import { faPlus, faShoppingBasket, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';
import './Sidebar.css'

const AdminSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleLogout = () => {
        setLoggedInUser({});
        sessionStorage.clear();
    }

    return (
        <div className='sidebar-main p-4'>
            <ul>
                <Link to='/admin/serviceList' style={{ textDecoration: "none" }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faShoppingBasket}></FontAwesomeIcon>Service List</li>
                </Link>
                <Link to='/addService' style={{ textDecoration: "none" }}>
                    <li className='my-3'> <FontAwesomeIcon className='mr-1' icon={faPlus}></FontAwesomeIcon>Add Service</li>
                </Link>
                <Link to='/makeAdmin' style={{ textDecoration: "none" }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faUserPlus}></FontAwesomeIcon>Make Admin</li>
                </Link>
                <hr />
                <Link to='/' onClick={handleLogout} style={{ textDecoration: "none" }}>
                    <li> <FontAwesomeIcon className='mr-1' icon={faSignOutAlt}></FontAwesomeIcon>Log out</li>
                </Link>
            </ul>
        </div>
    );
};

export default AdminSidebar;