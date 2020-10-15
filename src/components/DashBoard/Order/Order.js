import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const Order = () => {

  // const {serviceId} =  useParams();
  //   console.log(serviceId);

  //   const [selectedService,setSelectedService] = useState({})
  //   useEffect(()=>{
  //       fetch('http://localhost:4000/services/'+serviceId)
  //       .then(res => res.json())
  //       .then(data => setSelectedService(data))
  //   },[])

  //   console.log(selectedService);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <form style={{ width: '400px',padding:'30px' }} onSubmit={handleSubmit(onSubmit)}>
      <div className='form-group'>
        <input name="name" ref={register} className='form-control' placeholder='Your name/Company name' />
        {errors.name && <span>This field is required</span>}
      </div>
      <div className='form-group'>
        <input name="email" ref={register} className='form-control' placeholder='Your Email' />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className='form-group'>
        <input name="serviceName" ref={register} className='form-control' />     
      </div>

      <div className='form-group'>
        <textarea name="name" ref={register} className='form-control'  placeholder='Product Detail'/>
        {errors.name && <span>This field is required</span>}
      </div>
      <div className='form-group row'>
        <div className="col-md-6">
        <textarea name="price" ref={register} className='form-control'  placeholder='price'/>
        {errors.name && <span>This field is required</span>}
        </div>
        <div className="col-md-6">
          <input type="file" />
        </div>
      </div>
      <input type="submit" className='btn btn-dark' />
    </form>
  );
};

export default Order;