import React from 'react';

const OrderStatusCard = ({service}) => {
    return (
        <div className='col-md-3 col-10 m-1'>
            <div className="card text-center py-4">
                    <img src='' className="card-img-top img-fluid w-25 m-auto " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">title</h5>
                        <p className="card-text">text</p>
                    </div>
                </div>
                <h1>this is service list</h1>
        </div>
    );
};

export default OrderStatusCard;