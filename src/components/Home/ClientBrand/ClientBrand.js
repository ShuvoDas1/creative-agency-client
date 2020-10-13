import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
const ClientBrand = () => {
    return (
        <section className='row d-flex justify-content-center m-5'>
            <div>
                <img src={slack} className='img-fluid ml-3'  style={{height:'35px'}} alt=""/>
                <img src={google} className='img-fluid ml-3' style={{height:'35px'}} alt=""/>
                <img src={uber} className='img-fluid ml-3' style={{height:'35px'}} alt=""/>
                <img src={netflix} className='img-fluid ml-3' style={{height:'35px'}} alt=""/>
                <img src={airbnb} className='img-fluid ml-3' style={{height:'35px'}} alt=""/>
            </div>
        </section>
    );
};

export default ClientBrand;