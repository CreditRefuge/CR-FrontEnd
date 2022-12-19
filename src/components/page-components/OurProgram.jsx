import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';

function OurProgram(props) {
  return (
		<Container className='my-5 p-5' id='our-prog-main-div'>
			<Row>
				<Col>
					<h1 className=''>Our Program</h1>
				</Col>
				<Col className='col-6'>
					<p className=''>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
						veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
						velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
						occaecat cupidatat non proident, sunt in culpa qui officia deserunt
						mollit anim id est laborum.
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default OurProgram;
