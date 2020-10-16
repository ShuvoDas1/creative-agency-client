import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingBag, faCommentAlt } from '@fortawesome/free-solid-svg-icons'


import SplitPane from 'react-split-pane';
import Order from '../Order/Order';
import ServiceList from '../OrderStatus/OrderStatus';
import Review from '../Review/Review';

const DashBoardMain = () => {
    const styles = {
        background: '#000',
        width: '2px',
        cursor: 'col-resize',
        margin: '0 5px',
        height: '100%',
    };
    return (
        <div>
            
        </div>
                // <div style={{ width: '300px' }}>
                //     <ul style={{ listStyle: 'none', }}>

                //         <Link to='/dashboard/order' style={{ textDecoration: 'none' }}>
                //             <li> <FontAwesomeIcon className='mr-1' icon={faCartPlus}></FontAwesomeIcon>Order</li>
                //         </Link>
                //         <Link to='/dashboard/servicelist' style={{ textDecoration: 'none' }}>
                //             <li className='my-3'> <FontAwesomeIcon className='mr-1' icon={faShoppingBag}></FontAwesomeIcon>Service List</li>
                //         </Link>
                //         <Link to='/dashboard/review' style={{ textDecoration: 'none' }}>
                //             <li> <FontAwesomeIcon className='mr-1' icon={faCommentAlt}></FontAwesomeIcon>Review</li>
                //         </Link>

                //     </ul>
                // </div>
                
    );
};

export default DashBoardMain;