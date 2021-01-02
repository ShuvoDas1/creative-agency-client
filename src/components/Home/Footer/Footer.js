import React from 'react';
import emailjs from 'emailjs-com';

const Footer = () => {

    const handleFormSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_deygipl', 'template_bh15yzb', e.target, 'user_mk4eGaKGs3zMADB7SHdMY')
            .then((result) => {
                alert('Message sent successfully')
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className='p-5' style={{ backgroundColor: '#FBD062' }}>
            <div className='row'>
                <div className="col-md-6 col-12">
                    <h1>Let us handle your <br /> project professionally.</h1>
                    <p className='text-secondary'>With well written codes,  we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 col-12">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <input type="email" name='email' className="form-control" placeholder="Enter email Address" />
                        </div>
                        <div className="form-group">
                            <input type="text" name='name' className="form-control" placeholder="Your name/Company name" />
                        </div>
                        <div className="form-group">
                            <textarea type='text' col='4' name='message' placeholder='Your message' className="form-control"></textarea>
                        </div>

                        <button type="submit" className="btn btn-dark">Send</button>
                    </form>
                </div>
            </div>
            <br />
            <div className='mt-5'>
                <p className='text-dark text-center'>Copyright All Rigths Reserved {new Date().getFullYear().toString()}</p>
            </div>
        </section>
    );
};

export default Footer;