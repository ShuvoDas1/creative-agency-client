import React, { useState } from 'react';
import { useEffect } from 'react';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import ClientFeedback from '../ClientFeedback/ClientFeedback';
const ClientsFeedback = () => {
    
    const [reviews,setReviews] =  useState([])

    useEffect(()=>{
        fetch('https://secure-bastion-91408.herokuapp.com/getReview')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
        <section>
            <h2 className='text-center mt-3 mb-3 p-3'> Clients <span className='text-success'>Feedback</span></h2>
            <div className='row d-flex justify-content-center'>
                {
                    reviews.map(feedback => <ClientFeedback feedback={feedback}></ClientFeedback>)
                }
            </div>
            <br/>
        </section>
    );
};

export default ClientsFeedback;