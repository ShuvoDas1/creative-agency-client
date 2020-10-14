import React, { useEffect, useState } from 'react';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import Service from '../Service/Service';

const Services = () => {
    const fakeServices = [
        {   
            id: 1,
            img: service1,
            name: 'Web and Mobile Design',
            description: 'We craft stunning and amazing web UI, using a well drrafted UX to fit your product.'
        },
        {   
            id: 2,
            img: service2,
            name: 'Graphic Design',
            description: 'Amazing flyers, social media posts and brand representations that would make your brand stand out..'
        },
        {   
            id: 3,
            img: service3,
            name: 'Web Development',
            description: 'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
        }
    ]

    const [services,setServices] =  useState([])

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