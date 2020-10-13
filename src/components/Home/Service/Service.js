import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    return (

        <div className='col-md-3 col-10 m-1'>
            <div className="card text-center py-4">
                <img src={service.img} className="card-img-top img-fluid w-25 m-auto " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;