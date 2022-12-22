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
					Schedule Your Free Consultation Today!
				</Button>

			</Container>
		</div>
	);
}

export default MainComponent;
