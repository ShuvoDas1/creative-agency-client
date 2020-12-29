import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import AdminSidebar from '../DashBoard/Sidebar/AdminSidebar';
import './AdminServiceList.css'
const AdminServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                    <div className="col-md-10 serviceList-table" style={{width: '100%'}}>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminServiceList;