import React from 'react';
import ClientBrand from '../ClientBrand/ClientBrand';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header-container'>
                <Navbar></Navbar>
                <HeaderMain></HeaderMain>
            </div>
            <div>
                <ClientBrand></ClientBrand>
            </div>
        </div>
    );
};

export default Header;