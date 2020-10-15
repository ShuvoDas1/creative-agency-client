import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import fakeServices from '../../fakeServices/fakeServices';
import Service from '../Service/Service';

const Services = () => {

    const [services,setServices] =  useContext(UserContext)

    useEffect(() =>{
        setServices(fakeServices)
    },[])

    return (
        <section>
            <h2 className='text-center mt-3 mb-3 p-3'> Provides awesome <span className='text-success'>services</span></h2>
            <div className='row d-flex justify-content-center'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;