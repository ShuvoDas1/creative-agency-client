import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png'
import './Order.css'
import AdminServiceList from '../AdminServiceList/AdminServiceList';

const Order = () => {

  const { serviceId } = useParams();
  const { register, handleSubmit, errors } = useForm();


  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [placedOrder, setPlacedOrder] = useState({})
  const [file, setFile] = useState(null)
  const [selectedService, setSelectedService] = useState({})
  const [admin, setAdmin] = useState([]);
  
  useEffect(() => {
    fetch('https://secure-bastion-91408.herokuapp.com/services/' + serviceId)
      .then(res => res.json())
      .then(data => setSelectedService(data[0]))
  }, [])

  

  const handleBlur = e => {
    const newOrder = { ...placedOrder }
    newOrder[e.target.name] = e.target.value;
    setPlacedOrder(newOrder);
  }

  const handleFileChange = e => {
    const newFile = e.target.files[0];
    setFile(newFile)
  }

  const onSubmit = e => {
    const formData = new FormData()

    formData.append('file', file)
    formData.append('name', placedOrder.name)
    formData.append('email', loggedInUser.email)
    formData.append('serviceName', selectedService.name)
    formData.append('productDetail', placedOrder.productDetail)
    formData.append('price', placedOrder.price)
    formData.append('serviceDescription', selectedService.description)
    formData.append('serviceImg', selectedService.img)


    fetch('https://secure-bastion-91408.herokuapp.com/addAOrder', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        alert('Your order placed successfully');
      })
      .catch(error => {
        console.error(error)
      })

  };
  return (
    <section className='order-main'>     
         <div>  
             <div className='d-flex justify-content-between p-3' >
               <Link to='/'><img src={logo} className='img-fluid' alt="" /></Link>
               <h5>ORDER</h5>
               <h5>{loggedInUser.name}</h5>
             </div>
             <div className='row'>
               {/* <div className="col-md-2">
                 <Sidebar></Sidebar>
               </div> */}
               <div className="col-md-12 order-details">
                 <form onSubmit={handleSubmit(onSubmit)} className='container'>
                   <div className='form-group'>
                     <input name="name" ref={register({ required: true })} onBlur={handleBlur} className='form-control p-4' placeholder='Your name/Company name' />
                     {errors.name && <span style={{ color: 'red' }}>This field is required</span>}
                   </div>
                   <div className='form-group'>
                     <input name="email" ref={register} onBlur={handleBlur}  defaultValue={loggedInUser.email} className='form-control p-4' placeholder='Your Email' />
                   </div>
                   <div className='form-group'>
                     <input name="serviceName" onBlur={handleBlur} ref={register} defaultValue={selectedService.name} className='form-control p-4' />
                   </div>
 
                   <div className='form-group'>
                     <textarea name="productDetail" ref={register({ required: true })} onBlur={handleBlur} className='form-control p-4' placeholder='Product Detail' />
                     {errors.productDetail && <span style={{ color: 'red' }}>This field is required</span>}
                   </div>
                   <div className='form-group row'>
                     <div className="col-md-6">
                       <input name="price" ref={register({ required: true })} onBlur={handleBlur} className='form-control p-4' placeholder='price' />
                       {errors.price && <span style={{ color: 'red' }}>This field is required</span>}
                     </div>
                     <div className="col-md-6">
                       <input name='image'  className='form-control' type="file" onChange={handleFileChange} />
                     </div>
                   </div>
                   <input type="submit" className='btn btn-dark' />
                 </form>
               </div>
             </div>
           </div>
    </section>

  );
};

export default Order;