import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../Sidebar/Sidebar';
import './Review.css'

const Review = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [review, setReview] = useState({})
    const [file, setFile] = useState(null);
    const { register, handleSubmit, errors } = useForm();

    const handleBlur = e => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview)
    }

    const handleFile = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = e => {

        const formData = new FormData();
        formData.append('image', file);
        formData.append('name', review.name);
        formData.append('companyName', review.companyName);
        formData.append('description', review.description)

        fetch('https://secure-bastion-91408.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                alert('Thanks for your review');
            })
    }

    return (
        <section className='review-main'>
            <div className='d-flex justify-content-between p-3' >
                <Link to='/'><img src={logo} className='img-fluid' alt="" /></Link>
                <h5>REVIEW</h5>
                <h5>{loggedInUser.name}</h5>
            </div>
            <div className='row'>
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 review-details">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <input name="name" ref={register({ required: true })} onBlur={handleBlur} className='form-control p-4' placeholder='Your name/Company name' />
                            {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <div className='form-group'>
                            <input name="companyName" ref={register({ required: true })} className='form-control p-4' onBlur={handleBlur} placeholder='Company Name,Designation' />
                            {errors.companyName && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>

                        <div className='form-group'>
                            <textarea name="description" ref={register({ required: true })} onBlur={handleBlur} className='form-control p-4' placeholder='Description' />
                            {errors.description && <span style={{ color: 'red' }}>This field is required</span>}
                            
                        </div>
                        <br />
                        <div className="form-group">
                            <input type="file" name='image' onChange={handleFile} />
                            {errors.image && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>

                        <input type="submit" className='btn btn-dark' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;