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
		
		<nav className="navbar navbar-expand-lg">
			<a className="navbar-brand" href="#">
				<img src={logo} className='img-fluid' style={{ width: "100px", height: "50px" }} />
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link className="nav-link" to='/'>Home</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to='/dashboard'>Dashboard</Link>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="https://shuvo-portfolio.netlify.app/" target='blank'>Our Portfolio</a>
					</li>
					{/* <li className="nav-item">
						<a className="nav-link" href="#ourTeam">Our Team </a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="Footer">Contact Us</a>
					</li> */}
					<button className='btn btn-dark' onClick={Login}>Login</button>
				</ul>
			</div>
		</nav>

	);
};

export default Navbar;