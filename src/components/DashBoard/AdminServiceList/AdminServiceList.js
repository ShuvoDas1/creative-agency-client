import React, { useContext, useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import AdminSidebar from '../Sidebar/AdminSidebar';
import './AdminServiceList.css'
const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('https://secure-bastion-91408.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])



    return (
        <section className='serviceList-main'>
            <div className='d-flex justify-content-between p-3'>
                <Link to='/'><img src={logo} className='img-fluid' alt="" /></Link>
                <h5>Service List</h5>
                <h5>{loggedInUser.name}</h5>
            </div>
            <div>
                <div className='row'>
                    <div className="col-md-2">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-md-10 serviceList-table" style={{ width: '100%' }}>

                        <Table striped bordered hover variant="light">

                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>EMAIL ID</th>
                                    <th>SERVICE</th>
                                    <th>SERVICE DETAILS</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    allOrders == 0 && <div className="d-flex justify-content-center ">
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                }
                                {
                                    allOrders.map(order =>

                                        <tr>

                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.serviceName}</td>
                                            <td>{order.serviceDescription}</td>
                                            <td>
                                                <select className="form-select  form-control" aria-label="Default select example">
                                                    <option selected>Select Status</option>
                                                    <option value="Pending">Pending</option>
                                                    <option value="On Going">On Going</option>
                                                    <option value="Done">Done</option>
                                                </select>
                                            </td>
                                        </tr>

                                    )
                                }

                                {/* <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr> */}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServiceList;