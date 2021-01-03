import React, { useState } from 'react';
import frameImg from '../../../images/logos/Frame.png'
import './HeaderMain.css';
import Modal from 'react-modal';
import emailjs from 'emailjs-com';

const customStyles = {
    content: {
        width: '450px',
        padding: '40px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const HeaderMain = () => {

    const [modalIsOpen, setIsOpen] = useState(false);
   

    function closeModal() {
        setIsOpen(false);
    }

    const handleHireUs = () => {
        setIsOpen(true);
    }

    const handleSendMessage = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_deygipl', 'template_bh15yzb', e.target, 'user_mk4eGaKGs3zMADB7SHdMY')
          .then((result) => {
              alert('Thanks! Your message send successfully')
          }, (error) => {
              console.log(error.text);
          });
        e.target.reset();
    }

    return (

        <main className='row d-flex align-item-center' style={{ marginTop: '20px' }}>
            <div className="col-md-4 col-12 ml-5 ">
                <h2 className='text-black'> Let's Grew Your  Brand <br /> To The NextLavel </h2>
                <br />
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Culpa aliquid in, <br /> quisquam voluptates quam adipisci?</p>
                <br />
                <button className='btn btn-dark px-3' onClick={handleHireUs}>Hire Us</button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                   
                    <form onSubmit={handleSendMessage}>
                        <input type="text" name='email' placeholder='Your Email' className='form-control' />
                        <br/>
                        <input type="text" name='name' placeholder='Your name/ Company name' className='form-control' />
                        <br/>
                        <textArea className='form-control' name='message' placeholder='Message'></textArea>
                        <div className='mt-2'>
                            <button className='btn btn-success' style={{float: 'left'}} type='submit'>Send</button>
                            <button onClick={closeModal} className='btn btn-danger' style={{float: 'right'}}>close</button>
                        </div>
                    </form>
                </Modal>
            </div>
            <div className="col-md-6 col-12">
                <img className='img-fluid' src={frameImg} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;