import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import './Review.css'

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, errors } = useForm();

    const handleBlur = e => {
        if(e.target.value === undefined){
          alert('Please enter require data')
        }
      }

      const onSubmit = (data,e) =>{
          fetch('https://secure-bastion-91408.herokuapp.com/addReview',{
              method: 'POST',
              headers:{'Content-Type':'application/json'},
              body:JSON.stringify(data)
          })
          .then(res => res.json())
          .then(result =>{
              alert('Thanks for your review');
          })
      }

    return (
        <section className='review-main'>
            <div className='d-flex justify-content-between p-3' >
                <Link to='/'><img src={logo}  className='img-fluid' alt="" /></Link>
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
                            {errors.name && <span style={{color:'red'}}>This field is required</span>}
                        </div>
                        <div className='form-group'>
                            <input name="companyName" ref={register({ required: true })} className='form-control p-4' onBlur={handleBlur}  placeholder='Company Name,Designation' />
                            {errors.companyName && <span style={{color:'red'}}>This field is required</span>}
                        </div>

                        <div className='form-group'>
                            <textarea name="description" ref={register({ required: true })} onBlur={handleBlur} className='form-control p-4' placeholder='Description' />
                            {errors.description && <span style={{color:'red'}}>This field is required</span>}
                        </div>
                        <input type="submit" className='btn btn-dark' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;