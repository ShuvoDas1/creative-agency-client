import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './AddService.css';
import AdminSidebar from '../Sidebar/AdminSidebar';

const AddService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [serviceInfo, setServiceInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e => {
        const newInfo = { ...serviceInfo }
        newInfo[e.target.name] = e.target.value;
        setServiceInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const onSubmit = e => {
        const formData = new FormData()

        formData.append('file', file)
        formData.append('name', serviceInfo.name)
        formData.append('description', serviceInfo.description)


        fetch('https://secure-bastion-91408.herokuapp.com/addAService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                alert('Service added successfully')
            })
            .catch(error => {
                console.error(error)
            })
    };

    return (
        <section className='add-service-main'>
            <div className='d-flex justify-content-between p-3'>
                <Link to='/'><img src={logo}  className='img-fluid' alt="" /></Link>
                <h5>ADD SERVICES</h5>
                <h5>{loggedInUser.name}</h5>
            </div>
            <div>
                <div className='row'>
                    <div className="col-md-2">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-md-10 add-service-details">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='form-group'>
                                <input name="name" onBlur={handleBlur} ref={register({ required: true })} className='form-control p-4' placeholder='Title' />
                                {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>

                            <div className='form-group'>
                                <textarea name="description" onBlur={handleBlur} ref={register({ required: true })} className='form-control p-4' placeholder='Description' />
                                {errors.description && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                            <div className='form-group'>
                                <input name='image' type="file" onChange={handleFileChange} />
                            </div>
                            <input type="submit" className='btn btn-dark' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddService;