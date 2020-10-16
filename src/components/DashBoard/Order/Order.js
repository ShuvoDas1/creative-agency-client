import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import logo from '../../../images/logos/logo.png'


const Order = () => {
 
  const { serviceId } = useParams();
  const { register, handleSubmit, watch, errors } = useForm();


  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [placedOrder, setPlacedOrder] = useState({})
  const [file, setFile] = useState(null)


    const [selectedService,setSelectedService] = useState({})
    useEffect(()=>{
        fetch('http://localhost:4000/services/'+serviceId)
        .then(res => res.json())
        .then(data => setSelectedService(data[0]))
    },[])


  const handleBlur = e => {
    const newOrder = { ...placedOrder }
    if(e.target.value === undefined){
      alert('place enter require data')
    }
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
    formData.append('serviceDescription',selectedService.description)
    formData.append('serviceImg',selectedService.img)


    fetch('http://localhost:4000/addAOrder', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        alert('Your order placed successfully')
      })
      .catch(error => {
        console.error(error)
      })
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
              <input name="name" ref={register} onBlur={handleBlur} className='form-control' placeholder='Your name/Company name' />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className='form-group'>
              <input name="email" ref={register} defaultValue={loggedInUser.email} className='form-control' placeholder='Your Email' />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className='form-group'>
              <input name="serviceName" onBlur={handleBlur} ref={register} defaultValue={selectedService.name} className='form-control' />
            </div>

            <div className='form-group'>
              <textarea name="productDetail" ref={register} onBlur={handleBlur} className='form-control' placeholder='Product Detail' />
              {errors.productDetail && <span>This field is required</span>}
            </div>
            <div className='form-group row'>
              <div className="col-md-6">
                <input name="price" ref={register} onBlur={handleBlur} className='form-control' placeholder='price' />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="col-md-6">
                <input type="file" onChange={handleFileChange} />
              </div>
            </div>
            <input type="submit" className='btn btn-dark' />
          </form>
        </div>
      </div>
    </section>

  );
};

export default Order;