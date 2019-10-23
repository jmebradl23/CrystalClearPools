import React from 'react';

import CTA from '../CTA/CTA';
import InlineImg from '../InlineImg/InlineImg';

import Img2 from '../../img/img2.jpg'
import Img3 from '../../img/img3.jpg'
import Img4 from '../../img/img4.jpg'

import './Services.css';

function Services () {
    return (
        <div className="Services">

            <section className='sec1 sec-img'></section>

            <section className="mt-100 padding-container">
                <h2 className="txt-ctr sec-title">Pool Services</h2>

                < CTA borderTop={false} borderBottom={true} borderWidth="75" text="Crystal Clear Pool & Spa Service is proud to offer the following pool services to pool owners. If you would like more information, or would like to inquire about a pool maintenance service that is not listed here, please do not hesitate to contact us." btnText='Contact Us' btnPath="/contact" btnClasses="path-update default-btn" btnType="link"/>

            </section>

            <section className="padding-container">
                
                < InlineImg title={'Pool Maintenance'} description={'Crystal Clear Pool & Spa Service offers pool owners extremely affordable weekly pool maintenance services. In addition to cleaning your swimming pool (including drains) and checking its chemical balance, we are also certified to provide regular maintenance for most any brand of pool auto cover.'} img={Img2} reverse={true} imgWidth={30} contWidth={60}/>
                        
                < InlineImg title={'Pool Repair'} description={'Regardless of how much money you have invested in your swimming pool it, like everything else, will eventually need a bit of repair work to keep it in good shape. From your pool bed itself to pool accessories and equipment such as pumps and filters, Crystal Clear Pool & Spa Service does it all.'} img={Img3} reverse={false} imgWidth={30} contWidth={60}/>

                < InlineImg title={'Pool Cleaning'} description={'Once in a while (and, from our experience, at least once a season), your pool will need a thorough, deep cleaning. Pool cleaning is quite a demanding and time consuming task, and unless you can actually picture yourself on all fours at the bottom of your empty pool with a scrubbing brush, you might want to give Crystal Clear Pool & Spa Service a call.'} img={Img4} reverse={true} imgWidth={30} contWidth={60}/>

            </section>

            <section className='sec2 sec-img'></section>

            <section className="padding-container">
                <h3 className="txt-ctr">Pool Maintenance</h3>
                <p>Is your pool in use all summer long? Are you constantly entertaining family and friends in your pool? Do you feel that there is not enough time in the day to keep your pool adequately maintained? If you answered “yes” to any of these questions then you need to call Crystal Clear Pool & Spa Service today.</p>
                <hr></hr>
                
                <h5>Pool Cleaning Services</h5>
                <p>Unless, you and your family are big fans of St. Patrick’s Day there is no reason why your pool should be green. If you notice your pool displaying even the slightest green glaze then you need to contact Crystal Clear Pool & Spa Service immediately. Our pool maintenance experts have the experience and know-how to determine whether a green pool can be remedied and replenished or whether it will need to be drained. If the former is the case, our team will use the following techniques to assess the scale and range of the damage as well as a number of measures to fix the problem.</p>

                <h5>Testing the Water</h5>
                <p>If your pool has gone green, then it is a telltale sign that your pool has insufficient chlorine in it. However, more importantly is determining the pH level of your pool. Our team uses the most advanced water testing kits that can determine the pH level of the water in your pool to great detail. In general, it is recommended that the pH level should be below 7.2. If it is higher than this number, we will apply the adequate amount of muriatic acid to correct the issue.</p>
                
                <h5>Shocking the Pool</h5>
                <p>Depending on both the pH level and the severity of the greenness, our team of pool maintenance team may need to shock your pool.</p>

                <h5>Applying Strong Algaecide</h5>
                <p>Following three or four hours of shocking, our maintenance team will then add a tailor-made algaecide that will ensure your pool is not only chlorinated but is also algae-free.</p>

                <h5>Checking the Pump & Filter</h5>
                <p>Whether your pool has a DE, sand or cartridge filter, we will be able to apply the necessary backwash techniques needed to ensure the pump and filter are running correctly.</p>

                <h5>Brushing the Pool</h5>
                <p>After 24 hours, we expect that the color of your pool will be pretty much back to normal and you should see a massive transformation. That being said, it is likely that it will remain cloudy following the shocking and will need additional filtration and brushing. Our team will return a day after the initial deep clean and complete the process.</p>

                <h5>Call Crystal Clear Pool & Spa Service</h5>
                <p>If you are looking for professional pool maintenance services then look no further. At Crystal Clear Pool & Spa Service, we are your one-stop shop for all your pool maintenance needs. Give us a call today and a member of our seasoned staff will gladly answer any questions that you may have in regards to pool cleaning. We are looking forward to serving you.</p>
            </section>
        </div>
    );
}

export default Services;