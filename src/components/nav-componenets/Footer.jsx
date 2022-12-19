import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';

function Footer(props) {
  return (
		<Container fluid className='bg-dark footer-main-div'>
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

			<a href='' target='_blank' rel='noreferrer' className='mx-2 link-info'>
				<Icon.Facebook size='30' />
			</a>
		</Container>
	);
}

export default Footer;
