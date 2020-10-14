import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faShoppingBag, faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import Order from '../Order/Order';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ServiceList from '../ServiceList/ServiceList';
import SplitPane from 'react-split-pane';

const ServiceFormMain = () => {
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
                <div style={{ width: '100px' }}>
                    <ul style={{ listStyle: 'none', }}>

                        <Link to='/services/form/order' style={{ textDecoration: 'none' }}>
                            <li> <FontAwesomeIcon className='mr-1' icon={faCartPlus}></FontAwesomeIcon>Order</li>
                        </Link>
                        <Link to='/services/form/serviceList' style={{ textDecoration: 'none' }}>
                            <li> <FontAwesomeIcon className='mr-1' icon={faShoppingBag}></FontAwesomeIcon>Service List</li>
                        </Link>
                        <Link to='/services/form/review' style={{ textDecoration: 'none' }}>
                            <li> <FontAwesomeIcon className='mr-1' icon={faCommentAlt}></FontAwesomeIcon>Review</li>
                        </Link>

                    </ul>
                </div>
                <div style={{ backgroundColor: '#E5E5E5' }}>
                    <Switch>

                        <Route path='/services/form/order'>
                            <Order></Order>
                        </Route>
                        <Route path='/services/form/serviceList'>
                            <ServiceList></ServiceList>
                        </Route>

                    </Switch>
                </div>
            </SplitPane>
        </Router>
    );
};

export default ServiceFormMain;