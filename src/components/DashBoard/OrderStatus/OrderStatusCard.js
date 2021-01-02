import React from 'react';

const OrderStatusCard = ({ service }) => {
    return (
       
            <div className='col-md-3 col-10 ml-auto mt-1 '>
                <div className="card text-center py-4">

                    <img src={service.serviceImage} className="card-img-top img-fluid w-25 m-auto " alt="..." />

                    <div className="card-body">
                        <h5 className="card-title">{service.serviceName}</h5>
                        <p className="card-text">{service.serviceDescription}</p>
                    </div>
                </div>
            </div>
        
    );
};

export default OrderStatusCard;