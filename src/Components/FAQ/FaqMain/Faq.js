import React from 'react';

import CTA from '../../CTA/CTA';
import QaDetails from '../QaDetails/QaDetails';
import FullImg from '../../FullImg/FullImg';
import ContentContainer from '../../ContentContainer/ContentContainer';
import List from '../../List/List';

import './Faq.css';

function Faq (props) {

        return (
            <div className="faq">

                < FullImg sec={1} />

                < ContentContainer text="Frequently Asked Questions" classes="questions-list">
                    
                    < QaDetails question={'Do I really need weekly maintenance services for my swimming pool?'} answer={'Weekly maintenance and cleaning is required to keep your pool safe and clean. Whether or not you need the full range of services Crystal Clear Pool & Spa Service provides really depends on how much time and effort you are willing to spend on your swimming pool yourself. If your only interest is to be able to jump in at any given time, then you probably want to consider getting the full service package.'} />
                    
                    < QaDetails question={'Is there any way to prevent stains in my pool?'} answer={'Absolutely! Stains in your pool are caused by metals and minerals that come in contact with the water. Crystal Clear Pool & Spa Service can help reduce the appearance of stains in your pool by introducing sequestering agents in your swimming pool, which serve to pull these metals and minerals out of the water.'} />
                    
                    < QaDetails question={'Why do I need a pool heater?'} answer={"You don't. Heaters are not necessary for you to fully enjoy your swimming pool. They do, however, extend your pool-using days considerably, warming up your swimming pool a lot faster (and sooner) than heat covers. They also allow you to continue using your swimming pool later in the season, when the sun isn't always warm enough to do the job."} />

                    < CTA borderTop={false} borderBottom={false} borderWidth="25" text="Above are the answers to a few of the most common questions we've come across, as well as a few swimming pool related tips below. If your question is not covered here, or if you would like more information, please do not hesitate to contact Crystal Clear Pool & Spa Service." btnText='Contact Us' btnPath="/contact" btnClasses="path-update default-btn" btnType="link"/>
                
                </ContentContainer>

                < FullImg sec={2} />

                < ContentContainer text="Helpful Tips" classes="tips">
                
                    < List items={[{title: 'Safety First', text: 'Make sure first aid and life saving equipment, such as a life preserver, is always kept close to the pool.'},{title: 'Be Attentive', text: 'Never leave children unattended in or around the pool.'},{title: 'Keep it Clean', text: 'Always make sure that all toys and pool accessories (such as floating mattresses) are taken out of the pool when you are done using it. Toys left behind in the pool may lure a child back to the pool when an adult is not present.'},{title: 'Weather Permitting', text: 'Keep an eye on the weather. It is extremely dangerous to be in or around the pool during an electrical storm, so you should head inside if the sky darkens.'},{title: 'Be Prepared', text: 'Consider enrolling in a CPR course. No one wants to think of the worst, but being prepared for it doesn\'t hurt and may mean life instead of death.'},{title: 'Have Protection', text: 'Fun in the sun around the swimming pool is a great way to spend a Saturday afternoon, but too much fun may amount to sunburns, especially in younger children. Make sure everyone is wearing waterproof sunscreen, and keep babies and infants in the shade when they are not in the water.'}]} keyName="tips" />
                
                </ ContentContainer>
            
            </div>
        )
}

export default Faq;