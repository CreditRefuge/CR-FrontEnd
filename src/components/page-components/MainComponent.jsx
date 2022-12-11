import React from 'react';
import { Button } from 'react-bootstrap';

function MainComponent() {
  return (
		<div className='main-component-div mx-auto mt-auto'>
			<h1 id='main-comp-h1' className='mx-auto mt-auto'>
				Credit Refuge
			</h1>

			<Button
				className='mx-auto'
				id='btn-get-started'
				size='lg'
				variant='primary'>
				Get Started
			</Button>

      {/* HOVER P'S */}
			<p
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
			</p>
		</div>
	);
}

export default MainComponent;
