import React from 'react';
import  { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingBag, faCommentAlt,faGripHorizontal } from '@fortawesome/free-solid-svg-icons'
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    return (
        <div>
                    <ul style={{ listStyle: 'none', }}>

                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <li> <FontAwesomeIcon className='mr-1' icon={faCartPlus}></FontAwesomeIcon>Order</li>
                        </Link>
                        <Link to='/serviceList' style={{ textDecoration: 'none' }}>
                            <li className='my-3'> <FontAwesomeIcon className='mr-1' icon={faShoppingBag}></FontAwesomeIcon>Service List</li>
                        </Link>
                        <Link to='/review' style={{ textDecoration: 'none' }}>
                            <li> <FontAwesomeIcon className='mr-1' icon={faCommentAlt}></FontAwesomeIcon>Review</li>
                        </Link>

                    </ul>
                </div>
    
    );
};

export default Sidebar;