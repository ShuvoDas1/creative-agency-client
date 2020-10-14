import React from 'react';

import ServiceFormMain from '../ServiceFormMain/ServiceFormMain';
import logo from '../../../images/logos/logo.png'
import { useParams } from 'react-router-dom';
const ServicesForm = () => {
    const {id} = useParams()
    return (
        <section style={{height:'100%'}}>
            <div className='d-flex justify-content-between p-3' >
                <img src={logo} className='img-fluid' style={{ width: "100px", height: "50px" }}alt=""/>
                <h5>Order</h5>
                <h5>shuvo das</h5>
            </div>
                <div>
                    <ServiceFormMain></ServiceFormMain>
                </div>      
        </section>
    );
};

export default ServicesForm;