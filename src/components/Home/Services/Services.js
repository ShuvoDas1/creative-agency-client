import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import fakeServices from '../../fakeServices/fakeServices';
import Service from '../Service/Service';

const Services = () => {
    
    // const addToDatabase = () => {
    //     console.log(fakeServices)
    //     fetch('http://localhost:4000/addServices',{
    //         method: 'POST',
    //         headers: {"Content-Type":"application/json"},
    //         body: JSON.stringify(fakeServices)
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //     })
    // }

    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    

    return (
        <section>
            <h2 className='text-center mt-3 mb-3 p-3'> Provides awesome <span className='text-success'>services</span></h2>
            <div className='row d-flex justify-content-center'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <br/>

        </section>
    );
};

export default Services;