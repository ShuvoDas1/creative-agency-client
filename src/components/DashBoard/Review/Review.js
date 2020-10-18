import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, errors } = useForm();

    const handleBlur = e => {
        if(e.target.value === undefined){
          alert('place enter require data')
        }
      }

      const onSubmit = (data,e) =>{
          fetch('http://localhost:4000/addReview',{
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
                <div className="col-md-8" style={{ backgroundColor: "#F4F7FC", height: '100%', padding: '30px' }}>
                    <form style={{ width: '400px', padding: '30px' }} onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-group'>
                            <input name="name" ref={register({ required: true })} onBlur={handleBlur} className='form-control' placeholder='Your name/Company name' />
                            {errors.name && <span style={{color:'red'}}>This field is required</span>}
                        </div>
                        <div className='form-group'>
                            <input name="companyName" ref={register({ required: true })} className='form-control' onBlur={handleBlur}  placeholder='Company Name,Designation' />
                            {errors.companyName && <span style={{color:'red'}}>This field is required</span>}
                        </div>

                        <div className='form-group'>
                            <textarea name="description" ref={register({ required: true })} onBlur={handleBlur} className='form-control' placeholder='Description' />
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