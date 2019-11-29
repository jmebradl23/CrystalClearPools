import React from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';

import Map from '../../img/ccMap.jpg';
import Visa from '../../img/Visa.png';
import Mastercard from '../../img/Mastercard.png';
import AmEx from '../../img/American-Express.png';
import Discover from '../../img/Discover.png';

import './Footer.css';

function Footer () {
    return (
        // <section className="Footer">
        //     <div className="footer-container">
        //         <div className='duet-flex'>
        //             <div className="half half-cont flex-left">
        //                 <p>Crystal Clear Pool & Spa Service Napa, CA, 94558-2804</p>
        //                 <p>Tel: <a href="tel:17072528255">(707) 252-8255</a></p>
        //                 <p>Email: <a href="mailto:info@ccpoolspa.expert">info@ccpoolspa.expert</a></p>
        //             </div>
        //             <div className='half half-img flex-right'>
        //                 <div className="img-container">
        //                     <div className="img_holder map txt-ctr">
        //                         <a href="https://www.google.com/maps/place/Crystal+Clear+Pool+%26+Spa/@38.3226835,-122.8657747,9z/data=!3m1!4b1!4m5!3m4!1s0x0:0xd98c151d45dbda8e!8m2!3d38.324017!4d-122.3053349?hl=en" >
        //                             <img src={Map} alt='Area map'/> 
        //                         </a>   
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="credit-cards txt-ctr">
        //             <div className="quad-flex">
        //                 <img src={Visa} alt="visa"/>
        //                 <img src={Mastercard} alt="mastercard"/>
        //                 <img src={AmEx} alt="American Express"/>
        //                 <img src={Discover} alt="Discover"/>
        //             </div>
        //         </div>
        //         <div className="left txt-sm">Site design by hintonbradley</div>
        //     </div>
        // </section>

        <div className="Footer">
            < ContentContainer >
                <div className='duet-flex'>
                    <div className="half half-cont flex-left">
                        <p>Crystal Clear Pool & Spa Service Napa, CA, 94558-2804</p>
                        <p>Tel: <a href="tel:17072528255">(707) 252-8255</a></p>
                        <p>Email: <a href="mailto:info@ccpoolspa.expert">info@ccpoolspa.expert</a></p>
                    </div>
                    <div className='half half-img flex-right'>
                        <div className="img-container">
                            <div className="img_holder map txt-ctr">
                                <a href="https://www.google.com/maps/place/Crystal+Clear+Pool+%26+Spa/@38.3226835,-122.8657747,9z/data=!3m1!4b1!4m5!3m4!1s0x0:0xd98c151d45dbda8e!8m2!3d38.324017!4d-122.3053349?hl=en" >
                                    <img src={Map} alt='Area map'/> 
                                </a>   
                            </div>
                        </div>
                    </div>
                </div>
                <div className="credit-cards txt-ctr">
                    <div className="quad-flex">
                        <img src={Visa} alt="visa"/>
                        <img src={Mastercard} alt="mastercard"/>
                        <img src={AmEx} alt="American Express"/>
                        <img src={Discover} alt="Discover"/>
                    </div>
                </div>
            </ContentContainer>
            <div className="left txt-sm">Site design by hintonbradley</div>
        </div>
    );
}

export default Footer;