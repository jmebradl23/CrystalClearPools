import React from 'react';

import CTA from '../../CTA/CTA';
import QaDetails from '../QaDetails/QaDetails';

import './Faq.css';

class Faq extends React.Component {

    render () {
        return (
            <div className="faq">

                <section className='sec1 sec-img'></section>

                <section id="question-list faq" className="mt-100 padding-container">
                    <h2 className="txt-ctr sec-title">Frequently Asked Questions</h2>

                    < QaDetails question={'Do I really need weekly maintenance services for my swimming pool?'} answer={'Weekly maintenance and cleaning is required to keep your pool safe and clean. Whether or not you need the full range of services Crystal Clear Pool & Spa Service provides really depends on how much time and effort you are willing to spend on your swimming pool yourself. If your only interest is to be able to jump in at any given time, then you probably want to consider getting the full service package.'} />
                    < QaDetails question={'Is there any way to prevent stains in my pool?'} answer={'Absolutely! Stains in your pool are caused by metals and minerals that come in contact with the water. Crystal Clear Pool & Spa Service can help reduce the appearance of stains in your pool by introducing sequestering agents in your swimming pool, which serve to pull these metals and minerals out of the water.'} />
                    < QaDetails question={'Why do I need a pool heater?'} answer={"You don't. Heaters are not necessary for you to fully enjoy your swimming pool. They do, however, extend your pool-using days considerably, warming up your swimming pool a lot faster (and sooner) than heat covers. They also allow you to continue using your swimming pool later in the season, when the sun isn't always warm enough to do the job."} />

                    < CTA borderTop={false} borderBottom={false} borderWidth="25" text="Above are the answers to a few of the most common questions we've come across, as well as a few swimming pool related tips below. If your question is not covered here, or if you would like more information, please do not hesitate to contact Crystal Clear Pool & Spa Service." btnText='Contact Us' btnPath="/contact" btnClasses="path-update default-btn" btnType="link"/>

                </section>

                <section className='sec2 sec-img'></section>
                
                <section id="question-list tips" className="padding-container">
                    <h2 className="txt-ctr sec-title">Helpful Tips</h2>
                    <ul>
                        <li>Make sure first aid and life saving equipment, such as a life preserver, is always kept close to the pool.</li>
                        <li>Never leave children unattended in or around the pool.</li>
                        <li>Always make sure that all toys and pool accessories (such as floating mattresses) are taken out of the pool when you are done using it. Toys left behind in the pool may lure a child back to the pool when an adult is not present.</li>
                        <li>Keep an eye on the weather. It is extremely dangerous to be in or around the pool during an electrical storm, so you should head inside if the sky darkens.</li>
                        <li>Consider enrolling in a CPR course. No one wants to think of the worst, but being prepared for it doesn't hurt and may mean life instead of death.</li>
                        <li>Fun in the sun around the swimming pool is a great way to spend a Saturday afternoon, but too much fun may amount to sunburns, especially in younger children. Make sure everyone is wearing waterproof sunscreen, and keep babies and infants in the shade when they are not in the water.</li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Faq;