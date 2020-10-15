import React from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';

const Order = () => {
    const [services,setServices] =  useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form style={{ width:'400px'}} onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
        <input name="name"  ref={register} className='form-control' placeholder='Your name/Company name' />
        {errors.name && <span>This field is required</span>}
        </div>
        <div className='form-group'>
        <input name="email"  ref={register} className='form-control'  placeholder='Your Email' />
        {errors.email && <span>This field is required</span>}
        </div>
        <div className='form-group'>
        <input name="name"  ref={register} className='form-control' defaultValue={services.name} placeholder='Your name/Company name' />
        {errors.name && <span>This field is required</span>}
        </div>
      
      <input name="exampleRequired" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
    );
};

export default Order;