import React from 'react';
import customer1 from '../../../images/customer-1.png'
import customer2 from '../../../images/customer-2.png'
import customer3 from '../../../images/customer-3.png'
import ClientFeedback from '../ClientFeedback/ClientFeedback';
const ClientsFeedback = () => {
    const fakeClientsFeedback = [
        {
            name: 'Nash Patrik',
            companyName: 'CEO,Manpol',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aut, aperiam modi quae facere aliquid!",
            img: customer1
        },
        {
            name: 'Miriam Barron',
            companyName: 'CEO,Manpol',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aut, aperiam modi quae facere aliquid!",
            img: customer2
        },
        {
            name: 'Bia Melone',
            companyName: 'CEO,Manpol',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa aut, aperiam modi quae facere aliquid!",
            img: customer3
        }
        
    ]
    return (
        <section>
            <h2 className='text-center mt-3 mb-3 p-3'> Clients <span className='text-success'>Feedback</span></h2>
            <div className='row d-flex justify-content-center'>
                {
                    fakeClientsFeedback.map(feedback => <ClientFeedback feedback={feedback}></ClientFeedback>)
                }
            </div>
        </section>
    );
};

export default ClientsFeedback;