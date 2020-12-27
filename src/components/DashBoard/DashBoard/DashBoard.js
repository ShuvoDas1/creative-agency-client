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
import Sidebar from './Sidebar/Sidebar';
import Order from '../Order/Order';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)



    return (
        <section>
            <div>
                <Order></Order>
            </div>
        </section>
    );
};

export default DashBoard;