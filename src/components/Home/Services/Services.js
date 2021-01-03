import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Service from '../Service/Service';

const Services = () => {
    


    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('https://secure-bastion-91408.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    

    return (
        <section>
            <h2 className='text-center mt-3 mb-3 p-3'> Provides awesome <span className='text-success'>services</span></h2>
            <div className='row d-flex justify-content-center'>
                {
                    services == 0 && <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                }
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
            <br/>

        </section>
    );
};

export default Services;