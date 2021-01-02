import React from 'react';
import './ClientFeedback.css'

const ClientFeedback = ({feedback}) => {
    return (
        <div className='col-md-3 col-10 m-1'>
            <div className="card text-center py-4">
                <div className='d-flex'>
                {
                    feedback.image ? <img src={`data: image/png;base64,${feedback.image.img}`} className="card-img-top img-fluid w-25 m-auto " alt="..." /> : <img src={feedback.img} className="card-img-top img-fluid w-25 m-auto " alt="..." /> 
                    
                }
                    <div className='mr-auto'>
                    <h5 className="card-title">{feedback.name}</h5>
                    <h6>{feedback.companyName}</h6>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{feedback.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedback;