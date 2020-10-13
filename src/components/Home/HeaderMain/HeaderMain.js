import React from 'react';
import frameImg from '../../../images/logos/Frame.png'
import './HeaderMain.css'


const HeaderMain = () => {
    return (
        <main className='row d-flex align-item-center' style={{marginTop:'20px'}}>
            <div className="col-md-4 col-12 ml-5 ">
                <h1 className='text-black'> Let's Grew Your  Brand To The NextLavel </h1>
                <p className='text-black'><small>Lorem ipsum dolor sit amet consectetur, <br/> adipisicing elit. Culpa aliquid in, <br/> quisquam voluptates quam adipisci?</small></p>
                <button className='btn btn-dark'>Hire Us</button>
            </div>
            <div className="col-md-6 col-12">
                <img className='img-fluid' src={frameImg} alt=""/>
            </div>
        </main>
    );
};

export default HeaderMain;