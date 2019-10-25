import React from 'react';

import ContactForm from '../ContactForm/ContactForm';
import ContentContainer from '../../ContentContainer/ContentContainer';
import FullImg from '../../FullImg/FullImg';

import './Contact.css';

function Contact (props) {
  return (
    <div className="Contact">

		< FullImg sec={1} />

		<ContentContainer>
			<div className="duet-flex">
				<div className="half">
					<h3>Contact Us</h3>

					< ContactForm />
				
				</div>
				<hr className="hr-50"></hr>
				<div className="half text-right">
					<div className="">
						<div className="contact-info">
							<h3>Contact Information</h3>
							<p>Crystal Clear Pool & Spa Service</p>
							<p>Napa, CA, 94558-2804</p>
							<p>Tel: <a href="tel:17072528255">(707) 252-8255</a></p>
							<p>Text: 707-320-7009</p>
							<p>Email: <a href="mailto:info@ccpoolspa.expert">info@ccpoolspa.expert</a></p>
						</div>
						<hr className="hr-50"></hr>
						<div className="hours">
							<h3>Hours of Service</h3>
							<p>Monday to Thursday: 10:00AM - 6:00PM</p>
							<p>Friday: 10:00AM - 4:00PM</p>
							<p>Sunday: Closed</p>
						</div>
					</div>
				</div>
			</div>

		</ContentContainer>

	</div>
  );
}

export default Contact;