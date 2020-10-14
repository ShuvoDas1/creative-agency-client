import React, { useState } from 'react';
import logo from '../../../images/logos/logo.png'
import nav from 'react-bootstrap/Navbar'
import './Navbar.css'
const Navbar = () => {
	// const [isOpen, setIsOpen] = useState(false);

	// const toggle = () => setIsOpen(!isOpen);
	return (
		//     <nav className="navbar  navbar-expand-lg ">
		// 	<div className="container">
		//         <a 
		//          class="navbar-brand">
		//             <img src={logo} className='img-fluid' style={{width:"100px", height:"50px"}} alt=""/>
		//         </a>
		// 		<button className="navbar-toggler"  data-target="#navbarNav" data-toggle="collapse">
		// 			<span class="navbar-toggler-icon"></span>
		// 		</button>
		// 		<div className="collapse navbar-collapse" id="navbarNav" >
		// 			<ul className="navbar-nav ml-auto">
		// 				<li className="nav-item">
		// 					<a class="nav-link" href="#Home">Home</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link" href="#ourPortfolio">Our Portfolio</a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link" href="#ourTeam">Our Team </a>
		// 				</li>
		// 				<li className="nav-item">
		// 					<a className="nav-link" href="#contact">Contact Us</a>
		// 				</li>
		//                 <button className='btn btn-dark'>Login</button>
		// 			</ul>
		// 		</div>
		// 	</div>
		// </nav>
		<nav class="navbar navbar-expand-lg">
			<a class="navbar-brand" href="#">
				<img src={logo} className='img-fluid' style={{ width: "100px", height: "50px" }} />
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav ml-auto">
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
		</nav>

	);
};

export default Navbar;