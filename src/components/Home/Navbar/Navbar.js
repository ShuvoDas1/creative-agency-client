import React  from 'react';
import logo from '../../../images/logos/logo.png'
import nav from 'react-bootstrap/Navbar'
import './Navbar.css'
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import { useEffect } from 'react';
const Navbar = () => {

	const history = useHistory();
	const Login = () => {
		history.push('/login')
	}

	return (
		
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
						<Link class="nav-link" to='/'>Home</Link>
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
					<button className='btn btn-dark' onClick={Login}>Login</button>
				</ul>
			</div>
		</nav>

	);
};

export default Navbar;