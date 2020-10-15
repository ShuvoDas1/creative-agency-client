import React from 'react';
import DashBoardMain from '../DashBoardMain/DashBoardMain'
import logo from'../../../images/logos/logo.png'
const DashBoard = () => {
    return (
        <section style={{height:'100%'}}>
        <div className='d-flex justify-content-between p-3' >
            <img src={logo} className='img-fluid' style={{ width: "100px", height: "50px" }}alt=""/>
            <h5>Order</h5>
            <h5>shuvo das</h5>
        </div>
            <div>
                <DashBoardMain></DashBoardMain>
            </div>      
    </section>
    );
};

export default DashBoard;