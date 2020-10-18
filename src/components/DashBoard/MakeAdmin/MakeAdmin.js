import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png';
import { useForm } from 'react-hook-form';
const MakeAdmin = () => {
    const [loggedInUser, setLoggedInUser] =  useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {

        fetch('http://localhost:4000/makeAdmin',{
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
        <section style={{ height: '100%' }}>
            <div className='d-flex justify-content-between p-3' >
                <img src={logo} className='img-fluid' style={{ width: "100px", height: "50px" }} alt="" />
                <h5>Add Services</h5>
                <h5>{loggedInUser.name}</h5>
            </div>
            <div className='row'>
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8" style={{ backgroundColor: "#F4F7FC", height: '100%', padding: '30px' }}>
                    <form style={{ width: '400px', padding: '30px' }} onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <input name="email"  ref={register({ required: true })} className='form-control' placeholder='Enter email' />
                            {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <input type="submit" className='btn btn-dark' />
                    </form>
                </div>
            </div>
            
        </section> 
    );
};

export default MakeAdmin;