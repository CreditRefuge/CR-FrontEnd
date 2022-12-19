import React from 'react';
import { Button, Container } from 'react-bootstrap';
import logo from '../../assets/imgs/cr-tent.png';

function MainComponent() {
	return (
		<div className='bg-dark main-component-div mx-auto mt-auto p-5'>

			<Container fluid className='overflow-hidden d-flex flex-column mt-auto'>

				<img src={logo} alt='logo' height='60%' className='mx-auto mt-auto'/>

				<Button
					className='mx-auto btn-info'
					id='btn-get-started'
					size='lg'
					variant='primary'>
					Get Started
				</Button>

			</Container>


			{/* HOVER P'S */}
			{/* <p
				className='hover-p'
				style={{ color: 'red', top: '50%', left: '60%', fontSize: '25px' }}>
				- Something Bad
			</p>

			<p
				className='hover-p'
				style={{ color: 'red', top: '50%', left: '26%', fontSize: '35px' }}>
				- Something Bad
			</p>

			<p
				className='hover-p'
				style={{ color: 'red', top: '70%', left: '40%', fontSize: '20px' }}>
				- Collections
			</p>

			<p
				className='hover-p'
				style={{ color: 'green', top: '70%', left: '55%', fontSize: '3a5px' }}>
				+ Something Positivew
			</p>

			<p
				className='hover-p'
				style={{ color: 'green', top: '50%', left: '45%', fontSize: '25px' }}>
				+ Something Positive
			</p> */}
		</div>
	);
}

export default MainComponent;
