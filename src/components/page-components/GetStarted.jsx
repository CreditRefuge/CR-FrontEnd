import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function GetStarted(props) {
  return (
		<div className='my-5' id='get-started-main-div'>
			<h1 className='mb-4'>Get Started</h1>
			<h6>Get Started Today For $50 / Month</h6>
			<Container className='my-5'>
				<Row>
					<Col>
						<Row></Row>
						<Row>
							<h2>Step 1</h2>
						</Row>
					</Col>

					<Col>
						<Row></Row>
						<Row>
							<h2>Step 2</h2>
						</Row>
					</Col>

					<Col>
						<Row></Row>
						<Row>
							<h2>Step 3</h2>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default GetStarted;
