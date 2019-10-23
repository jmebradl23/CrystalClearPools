import React from 'react';

import InlineImg from '../InlineImg/InlineImg';
import CTA from '../CTA/CTA';

import Img1 from '../../img/img1.jpg';
import Img4 from '../../img/img4.jpg';

import './About.css';

function About (props) {
  return (
    <div className="About">

      <section className='sec1 sec-img'></section>
      
      <section className="padding-container">
        <h2 className="txt-ctr">About Crystal Clear Pool & Spa Service</h2>

        < InlineImg description={"Crystal Clear Pool & Spa Service has been offering quality pool maintenance and pool repair services for many years. While large enough to serve the greater St. Helena area, we are proud to offer personalized and attentive services to each and every one of our customers. At Crystal Clear Pool & Spa Service, we believe in treating our esteemed clients with the level of respect and care they deserve, regardless of the size of their project – or budget."} img={Img1} reverse={false} imgWidth={30} contWidth={60}/>

        < InlineImg description={"Our team is comprised of highly trained and experienced pool technicians, ensuring that each and every maintenance and repair project is carried out quickly, efficiently and professionally. Our crew is courteous and respectful of your environment and privacy, which is why we strive to stay out of your way as much as possible and always try to accommodate the schedule that works best for you. Our goal is to work as hard and as quickly as possible to allow you to enjoy your swimming pool as much and as often as you like."} img={Img4} reverse={true} imgWidth={30} contWidth={60}/>
          
        < CTA borderTop={false} borderBottom={false} borderWidth="25" text="If you would like more information, or would like to inquire about pool maintenance & service, please do not hesitate to contact us." btnText='Contact Us' btnPath="/contact" btnClasses="path-update default-btn" btnType="link"/>

      </section>
    </div>
  );
}

export default About;