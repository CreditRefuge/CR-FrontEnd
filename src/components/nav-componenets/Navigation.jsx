import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Navigation() {
	return (
		<Navbar fixed='top' expand='lg' className='navbar-dark bg-dark'>
			<Container>
				<Navbar.Brand id='nav-logo'>
					<h2>Credit Refuge</h2>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto mx-5'>
						<Nav.Link href='#our-prog-main-div'>Our Program</Nav.Link>
						<Nav.Link href='#learn-main-div'>Learn</Nav.Link>

						<Nav.Link
							href='#contact-us-main-div'
							className='btn btn-outline-info mx-5'>
							Contact Us
						</Nav.Link>
						<Nav.Link
							href='#get-started-main-div'
							className='btn btn-info'>
							Get Started
						</Nav.Link>
					</Nav>

					<Nav>
						<a
							href='https://twitter.com/creditrefuge'
							target='_blank'
							rel='noreferrer'
							className='mx-2 link-info'>
							<Icon.Twitter size='30' />
						</a>

						<a
							href='https://www.instagram.com/thecreditrefuge/'
							target='_blank'
							rel='noreferrer'
							className='mx-2 link-info'>
							<Icon.Instagram size='30' />
						</a>

						<a
							href=''
							target='_blank'
							rel='noreferrer'
							className='mx-2 link-info'>
							<Icon.Facebook size='30' />
						</a>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Navigation;
