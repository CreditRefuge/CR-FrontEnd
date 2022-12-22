import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import creditimg from '../../assets/imgs/credit.webp'

function OurProgram(props) {
  return (
		<Container className='my-5 p-5' id='our-prog-main-div'>
			<h1 className='m-5'>Our Program</h1>
			<h5 className='m-4'>
				Credit Refuge is a credit repair company that specializes in removing
				negative and inaccurate information from credit reports.
			</h5>
			<Row>
				<Col>
					<img src={creditimg} alt="credit-image" height="350px" />
				</Col>
				<Col>
					<p>
						We understand that credit scores can have a major impact on an
						individual's financial life, and we are dedicated to helping our
						clients improve their credit scores and achieve their financial
						goals.
					</p>

					<p className=''>
						{/* Our team of experienced professionals is knowledgeable about
						credit and finance, and is dedicated to helping clients achieve
						their goals. */}
						We begin by conducting a credit assessment to determine our clients'
						current credit scores and identify any errors or negative items on
						their credit reports that may be affecting their scores. We then
						work with clients to develop a customized plan to address these
						issues and improve their credit scores.
						{/* This may involve disputing errors or incorrect information on credit reports,
						negotiating with creditors to remove negative items, or providing
						guidance on how to improve credit scores through responsible
						financial management. In addition to our credit repair services, we
						also offer business and personal credit education to help our
						clients better understand and improve their financial health. This
						may include information on how to build and maintain a good credit
						score, how to budget and save money, and how to avoid financial
						pitfalls such as excessive debt. We believe that by educating our
						clients on credit and financial management, we can empower them to
						take control of their financial lives and make informed decisions
						about their credit and finances. */}
						At Credit Refuge, we are committed to providing our clients with the
						highest level of service and support. Our team is available to
						answer questions and provide guidance throughout the credit repair
						process, and we offer a range of resources, including ongoing
						support and guidance to help clients stay on track and improve their
						credit scores and reach their financial goals.
						<br />
						<em>
							If you are looking to improve your credit score and take control
							of your financial future, we encourage you to contact Credit
							Refuge to learn more about our credit repair services and how we
							can help you achieve your financial goals.
						</em>
					</p>
				</Col>
			</Row>
		</Container>
	);
}

export default OurProgram;
