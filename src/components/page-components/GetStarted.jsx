import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import relax from '../../assets/imgs/relax.png';
import signup from '../../assets/imgs/signup.png';
import consultation from '../../assets/imgs/consultation.png';


function GetStarted(props) {
  return (
		<div className='my-5' id='get-started-main-div'>
			<h1 id="get-started-header" className='mb-4'>Get Started</h1>
			<h6>Get Started Today For $50 / Month</h6>
			<Container className='my-5'>
				<Row>
					<Col>
						<Row>
							<img src={consultation} alt="Consultation"/>
						</Row>
						<Row>
							<h2>Step 1</h2>
							<p>Schedule your consultation with one of our professionals who will develop a tailored program.</p>
						</Row>
					</Col>

					<Col>
						<Row>
							<img src={signup} alt="Sign Up"/>
						</Row>
						<Row>
							<h2>Step 2</h2>
							<p>Start your journey to better credit by signing up and initiating your program. </p>
						</Row>
					</Col>

					<Col>
						<Row>
							<img src={relax} alt="relax"/>
						</Row>
						<Row>
							<h2>Step 3</h2>
							<p>Sit back, relax, and let the professionals do the rest!</p>
						</Row>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default GetStarted;
