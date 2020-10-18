import React from 'react';

const Footer = () => {
    return (
        <section className=' m-5 p-5' style={{ backgroundColor: '#FBD062' }}>
            <div className='row'>
                <div className="col-md-6 col-12">
                    <h1>Let us handle your <br /> project professionally.</h1>
                    <p className='text-secondary'>With well written codes,  we build amazing apps for all <br /> platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-6 col-12">
                    <form>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Enter email Address" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your name/Company name" />
                        </div>
                        <div className="form-group">
                            <textarea type='text' col='4' className="form-control"></textarea>
                        </div>

                        <button type="submit" className="btn btn-dark" placeholder='Your Message'>Send</button>
                    </form>
                </div>
            </div>
            <br />
            <div className='mt-5'>
                <p className='text-secondary text-center'>copyright Orange labs {new Date().getFullYear().toString()}</p>
            </div>
        </section>
    );
};

export default Footer;