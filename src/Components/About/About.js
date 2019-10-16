import React from 'react';
import '../../main.css';
import './About.css';
import InlineImg from '../InlineImg/InlineImg';
import longClean from '../../img/longClean.jpg';
import tallPool from '../../img/tallPool.jpg';

function About (props) {
  return (
    <div>
        <div className="About">
            <section className='sec1 sec-img'></section>
            <section className="padding-container">
                <h3 className="txt-ctr">About Crystal Clear Pool & Spa Service</h3>
                < InlineImg description={["Crystal Clear Pool & Spa Service has been offering quality pool maintenance and pool repair services for many years. While large enough to serve the greater St. Helena area, we are proud to offer personalized and attentive services to each and every one of our customers. At Crystal Clear Pool & Spa Service, we believe in treating our esteemed clients with the level of respect and care they deserve, regardless of the size of their project – or budget.", <br></br>, <br></br>,  "Our team is comprised of highly trained and experienced pool technicians, ensuring that each and every maintenance and repair project is carried out quickly, efficiently and professionally. Our crew is courteous and respectful of your environment and privacy, which is why we strive to stay out of your way as much as possible and always try to accommodate the schedule that works best for you. Our goal is to work as hard and as quickly as possible to allow you to enjoy your swimming pool as much and as often as you like."]} img={tallPool} reverse={false} imgWidth={30} contWidth={60}/>
                < InlineImg description={["Crystal Clear Pool & Spa Service has been offering quality pool maintenance and pool repair services for many years. While large enough to serve the greater St. Helena area, we are proud to offer personalized and attentive services to each and every one of our customers. At Crystal Clear Pool & Spa Service, we believe in treating our esteemed clients with the level of respect and care they deserve, regardless of the size of their project – or budget.", <br></br>, <br></br>,  "Our team is comprised of highly trained and experienced pool technicians, ensuring that each and every maintenance and repair project is carried out quickly, efficiently and professionally. Our crew is courteous and respectful of your environment and privacy, which is why we strive to stay out of your way as much as possible and always try to accommodate the schedule that works best for you. Our goal is to work as hard and as quickly as possible to allow you to enjoy your swimming pool as much and as often as you like."]} img={longClean} reverse={true} imgWidth={30} contWidth={60}/>
            </section>
        </div>
    </div>
  );
}

export default About;