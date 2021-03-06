import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {

    return (
        <div className='col-md-3 col-10 m-1'>
            <Link to={'/order/'+service._id} style={{textDecoration:'none'}}>
                <div className="card text-center py-4">
                    {
                        service.image ? <img className="card-img-top img-fluid w-25 m-auto " src={`data:image/png;base64,${service.image.img}`}/>
                        :
                        <img src={service.img} className="card-img-top img-fluid w-25 m-auto " alt="..." />
                    }
                    
                    <div className="card-body">
                        <h5 className="card-title">{service.name}</h5>
                        <p className="card-text">{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default Service;