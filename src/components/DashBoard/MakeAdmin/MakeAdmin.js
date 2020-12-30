import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import { useForm } from 'react-hook-form';
import './MakeAdmin.css'
import { Link } from 'react-router-dom';
import AdminSidebar from '../DashBoard/Sidebar/AdminSidebar';

const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] =  useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {

        fetch('https://secure-bastion-91408.herokuapp.com/makeAdmin',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            alert('admin added successfully')
        })

    }

    return (
        <section className='make-admin-main'>
            <div className='d-flex justify-content-between p-3' >
                <Link to='/'><img src={logo}  className='img-fluid' alt="" /></Link>
                <h5>MAKE ADMIN</h5>
                <h5>{loggedInUser.name}</h5>
            </div>
            <div className='row'>
                <div className="col-md-2">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-md-10 make-admin-details">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group d-flex flex-row' >
                            <input name="email"  ref={register({ required: true })} className='form-control p-4' placeholder='Enter email' />
                            {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
                            <input type="submit" className='btn btn-dark ml-2 px-4' />
                        </div>
                        
                    </form>
                </div>
            </div>
            
        </section> 
    );
};

export default MakeAdmin;