import React from 'react';

import InlineImg from '../InlineImg/InlineImg';
import longpool from '../../img/longpool.jpg';
import Column from '../Column/Column';

import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Home.css';

class Home extends React.Component {

    componentDidMount () {
        window.scrollTo(0, 0);
    }

    render () {
        return (
            <div className="Home">
                
                <section className='sec1 sec-img'>
                    <h1 className="txt-ctr txt-overlay">Pool Service, Spa Repairs and Pool Maintenance in Napa and surrounding areas</h1>
                </section>

                <section className="padding-container sec-content">
                    <h2 className="txt-ctr sec-title">About Us</h2>
                    <div className="triplet-flex">
                        <div className="third third-cont flex-right">
                            
                            <FontAwesomeIcon icon={faBriefcase} style={{color:"#000", margin: "0 auto", display: "block"}} size="3x" />
                            
                            <hr></hr>

                            < Column title="Efficient" text="Crystal Clear Pool & Spa Service is the company of choice for pool owners in the greater Napa area who are looking for a professional, qualified and affordable pool maintenance team. Our years of training and experience not only make us knowledgeable, they also make us the very best company in Napa to handle most any pool maintenance and repair service quickly and efficiently." />

                        </div>
                        <div className="third third-cont flex-right">
                            
                            <FontAwesomeIcon icon={faSwimmer} style={{color:"#000", margin: "0 auto", display: "block"}} size="3x" />
                            
                            <hr></hr>

                            < Column title="Dedicated" text="We have been proudly offering pool maintenance and repair services to Napa residents for many years. Being pool enthusiasts ourselves, we understand the commitment as well as the investment you have made when you became a Napa pool owner. We know how much work needs to be put in and around your pool to keep it clean, safe and enjoyable, and we also understand that, unlike us, caring for your Napa pool shouldn't be your primary occupation. Why spend more time on pool maintenance than on actually enjoying your pool?" />

                        </div>
                        <div className="third third-cont flex-right">
                            
                            <FontAwesomeIcon icon={faClock} style={{color:"#000", margin: "0 auto", display: "block"}} size="3x" />

                            <hr></hr>

                            < Column title="Experienced" text="Crystal Clear Pool & Spa Service will be happy to take on part or all of your Napa pool maintenance, repair and renovation duties, allowing you more time to make the most of your investment in your free time. Crystal Clear Pool & Spa Service offers regular maintenance services, such as weekly Napa pool cleaning and chlorine monitoring as well as seasonal and unscheduled maintenance and repair services, such as pool painting and tile repair. Whatever your needs or your budget, we can help." />
                        
                        </div>
                    </div>
                </section>
                <section className='sec2 sec-img'></section>

                <section className="padding-container sec-content longpool">

                    < InlineImg title={'A Commitment to Customer Satisfaction'} description={'Crystal Clear Pool & Spa Service is one of the few Napa pool maintenance and repair companies to offer complete swimming pool maintenance and repair services for extremely affordable prices. This means that no matter the size of your project or number of Napa pool maintenance or repair services you require, you can trust that every step of the process will be expertly handled by the same company. Our work is always guaranteed, and we make sure that you are kept up-to-date on our progress and on any and all aspect of the work that may bring changes to the schedule or work order. If you are a Napa pool owner and would like more information on the pool maintenance and repair services we offer, do not hesitate to call us today. We will be happy to schedule a free estimate at your earliest convenience.'} tag={'Call us now! (707) 252-8255'} img={longpool} reverse={false} imgWidth={30} contWidth={60}/>

                </section>
            </div>
        )
    }
}

export default Home;