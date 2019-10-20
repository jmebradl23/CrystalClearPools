import React from 'react';
import './Contact.css';
import '../../main.css';
import ContactForm from './ContactForm/ContactForm';

function Contact (props) {
  return (
    <div className="Contact">
		<section className='sec1 sec-img'></section>
		<section className="padding-container">
			<div className="duet-flex">
				<div className="half">
					<h3>Contact Us</h3>
					< ContactForm />
					{/* <form >
						<div className="input-box">
							<label for="firstname">First Name</label>
							<input type="text" name="firstname" value=""></input>
						</div>
						<div className="input-box">
							<label for="lastname">Last Name</label>
							<input type="text" name="lastname" value=""></input>
						</div>
						<div className="input-box">
							<label for="phone">Phone Number</label>
							<input type="text" name="phone" value=""></input>
						</div>
						<div className="input-box">
							<label for="email">Email</label>
							<input type="text" name="email" value=""></input>
						</div>
						<div className="input-box">
							<label for="message">Message</label>
							<input type="text" name="message" value=""></input>
						</div>
						<input className="default-btn" type="submit" value="Submit"></input>
					</form>  */}
				</div>
				{/* <hr className="lg-hidden"></hr> */}
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
						<hr></hr>
						<div className="hours">
							<h3>Hours of Service</h3>
							<p>Monday to Thursday: 10:00AM - 6:00PM</p>
							<p>Friday: 10:00AM - 4:00PM</p>
							<p>Sunday: Closed</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
  );
}

export default Contact;