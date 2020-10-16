import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png'
const AddService = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();
    const [serviceInfo,setServiceInfo] =  useState({})
    const [file,setFile] = useState(null)

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
        formData.append('title', serviceInfo.title)
        formData.append('description', serviceInfo.description)


        fetch('http://localhost:4000/addAService', {
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
        // e.preventDefault();
        // e.target.reset();
    };

    return (
        <section style={{ height: '100%' }}>
            <div className='d-flex justify-content-between p-3' >
                <img src={logo} className='img-fluid' style={{ width: "100px", height: "50px" }} alt="" />
                <h5>Order</h5>
                <h5>{loggedInUser.name}</h5>
            </div>
            <div className='row'>
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <form style={{ width: '400px', padding: '30px' }} onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <input name="title" onBlur={handleBlur} ref={register({ required: true })} className='form-control' placeholder='Title' />
                            {errors.title && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>

                        <div className='form-group'>
                            <textarea name="description" onBlur={handleBlur}  ref={register({ required: true })} className='form-control' placeholder='Description' />
                            {errors.description && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <div className='form-group'>
                            <input name='image' type="file" onChange={handleFileChange}/>
                            {/* {errors.image && <span style={{color:'red'}}>This field is required</span>} */}
                        </div>
                        <input type="submit" className='btn btn-dark' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;