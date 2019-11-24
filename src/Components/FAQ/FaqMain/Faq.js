import React from 'react';

import CTA from '../../CTA/CTA';
import QaDetails from '../QaDetails/QaDetails';
import FullImg from '../../FullImg/FullImg';
import ContentContainer from '../../ContentContainer/ContentContainer';
import List from '../../List/ListDetails/ListDetails';
import LCCard from '../../Animations/ListCard/LCBackground';
import FAQs from '../../../content/faq';
import tips from '../../../content/tips';

import './Faq.css';

function Faq (props) {

    const faqItems = FAQs.map((qa) =>
        <QaDetails key={qa.id} question={qa.question} answer={qa.answer} />
    );

    const tipItems = tips.map((tip) =>
        <List key={tip.id} title={tip.title} text={tip.text} />
    );

    return (
        <div className="faq">

            < FullImg sec={1} />

            < ContentContainer text="Frequently Asked Questions" classes="questions-list">

                {faqItems}

                < CTA borderTop={false} borderBottom={false} borderWidth="25" text="Above are the answers to a few of the most common questions we've come across, as well as a few swimming pool related tips below. If your question is not covered here, or if you would like more information, please do not hesitate to contact Crystal Clear Pool & Spa Service." btnText='Contact Us' btnPath="/contact" btnClasses="path-update default-btn" btnType="link"/>
            
            </ContentContainer>

            < FullImg sec={2} />

            < ContentContainer text="Helpful Tips" classes="tips">
                <div className="sm-hidden">
                    <div className="duet-flex">
                        < LCCard className="half" title="Safety First" text="Make sure first aid and life saving equipment, such as a life preserver, is always kept close to the pool." width="300" height="300" />
                        < LCCard className="half" title="Be Attentive" text="Never leave children unattended in or around the pool."/>
                    </div>
                    <div className="duet-flex">
                        < LCCard className="half" title="Keep It Clean" text="Always make sure that all toys and pool accessories (such as floating mattresses) are taken out of the pool when you are done using it. Toys left behind in the pool may lure a child back to the pool when an adult is not present."/>
                        < LCCard className="half" title="Weather Permitting" text="Keep an eye on the weather. It is extremely dangerous to be in or around the pool during an electrical storm, so you should head inside if the sky darkens."/>
                    </div>
                    <div className="duet-flex">
                        < LCCard className="half" title="Be Prepared" text="Consider enrolling in a CPR course. No one wants to think of the worst, but being prepared for it doesn't hurt and may mean life instead of death."/>
                        < LCCard className="half" title="Have Protection" text="Fun in the sun around the swimming pool is a great way to spend a Saturday afternoon, but too much fun may amount to sunburns, especially in younger children. Make sure everyone is wearing waterproof sunscreen, and keep babies and infants in the shade when they are not in the water."/>
                    </div>
                </div>

                <ul className="List lg-hidden">
                    {tipItems}
                </ul>
                
            </ContentContainer>
            
        </div>
    )
}

export default Faq;