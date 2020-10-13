import React, { useState } from 'react';
import logo from '../../../images/logos/logo.png'
import './Navbar.css'
const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);

    // const toggle = () => setIsOpen(!isOpen);
    return (
        <nav class="navbar  navbar-expand-md  py-3 ">
		<div class="container">
            <a 
             class="navbar-brand">
                <img src={logo} className='img-fluid' style={{width:"100px", height:"50px"}} alt=""/>
            </a>
			<button className="navbar-toggler"  data-target="#navbarNav" data-toggle="collapse">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav" >
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a class="nav-link" href="#Home">Home</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#ourPortfolio">Our Portfolio</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#ourTeam">Our Team </a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#contact">Contact Us</a>
					</li>
                    <button className='btn btn-dark'>Login</button>
				</ul>
			</div>
		</div>
    </nav>
    
    );
};

export default Navbar;