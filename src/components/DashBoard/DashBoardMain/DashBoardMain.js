import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingBag, faCommentAlt } from '@fortawesome/free-solid-svg-icons'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SplitPane from 'react-split-pane';
import Order from '../Order/Order';
import ServiceList from '../ServiceList/ServiceList';
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
        <Router>
            <SplitPane
                split="vertical"
                minSize={150}
                defaultSize={150}
            // resizerStyle={styles}
            >
                <div style={{ width: '300px' }}>
                    <ul style={{ listStyle: 'none', }}>

                        <Link to='/dashboard/order' style={{ textDecoration: 'none' }}>
                            <li> <FontAwesomeIcon className='mr-1' icon={faCartPlus}></FontAwesomeIcon>Order</li>
                        </Link>
                        <Link to='/dashboard/servicelist' style={{ textDecoration: 'none' }}>
                            <li className='my-3'> <FontAwesomeIcon className='mr-1' icon={faShoppingBag}></FontAwesomeIcon>Service List</li>
                        </Link>
                        <Link to='/dashboard/review' style={{ textDecoration: 'none' }}>
                            <li> <FontAwesomeIcon className='mr-1' icon={faCommentAlt}></FontAwesomeIcon>Review</li>
                        </Link>

                    </ul>
                </div>
                <div style={{ backgroundColor: '#E5E5E5' }}>
                    <Switch>

                        <Route path='/dashboard/order'>
                            <Order></Order>
                        </Route>
                        <Route path='/dashboard/servicelist'>
                            <ServiceList></ServiceList>
                        </Route>
                        <Route path='/dashboard/review'>
                            <Review></Review>
                        </Route>

                    </Switch>
                </div>
            </SplitPane>
        </Router>
    );
};

export default DashBoardMain;