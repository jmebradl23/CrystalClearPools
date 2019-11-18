import React from 'react';

import CTA from '../../CTA/CTA';
import QaDetails from '../QaDetails/QaDetails';
import FullImg from '../../FullImg/FullImg';
import ContentContainer from '../../ContentContainer/ContentContainer';
import List from '../../List/ListWrapper/ListWrapper';
import FAQs from '../../../content/faq';
import tips from '../../../content/tips';

import './Faq.css';

function Faq (props) {

    const faqItems = FAQs.map((qa) =>
        <QaDetails key={qa.id} question={qa.question} answer={qa.answer} />
    );

    const tipItems = tips.map((tip) =>
        <List data={tip} />
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
            
                {tipItems}
                
            </ ContentContainer>
        
        </div>
    )
}

export default Faq;