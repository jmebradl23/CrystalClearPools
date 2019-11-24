import React from 'react';

import CTA from '../CTA/CTA';
import InlineImg from '../InlineImg/InlineImg';
import ContentContainer from '../ContentContainer/ContentContainer';
import FullImg from '../FullImg/FullImg';
import List from '../List/ListWrapper/ListWrapper';
import services from '../../content/services';
import LCCard from '../../Components/Animations/ListCard/LCBackground';

import Img2 from '../../img/img2.jpg'
import Img3 from '../../img/img3.jpg'
import Img4 from '../../img/img4.jpg'


import './Services.css';

function Services () {

    const servicesItems = services.map((service) =>
        <List key={service.id} data={service} />
    );

    return (
        <div className="Services">

            < FullImg sec={1} />

            < ContentContainer text="Pool Services" >

                < CTA borderTop={false} borderBottom={false} borderWidth="75" text="Crystal Clear Pool & Spa Service is proud to offer the following pool services to pool owners. If you would like more information, or would like to inquire about a pool maintenance service that is not listed here, please do not hesitate to contact us." btnText='Contact Us' btnPath="/contact" btnClasses="path-update default-btn" btnType="link"/>
                
                < InlineImg title={'Pool Maintenance'} description={'Crystal Clear Pool & Spa Service offers pool owners extremely affordable weekly pool maintenance services. In addition to cleaning your swimming pool (including drains) and checking its chemical balance, we are also certified to provide regular maintenance for most any brand of pool auto cover.'} img={Img2} reverse={true} imgWidth={30} contWidth={60}/>
                        
                < InlineImg title={'Pool Repair'} description={'Regardless of how much money you have invested in your swimming pool it, like everything else, will eventually need a bit of repair work to keep it in good shape. From your pool bed itself to pool accessories and equipment such as pumps and filters, Crystal Clear Pool & Spa Service does it all.'} img={Img3} reverse={false} imgWidth={30} contWidth={60}/>

                < InlineImg title={'Pool Cleaning'} description={'Once in a while (and, from our experience, at least once a season), your pool will need a thorough, deep cleaning. Pool cleaning is quite a demanding and time consuming task, and unless you can actually picture yourself on all fours at the bottom of your empty pool with a scrubbing brush, you might want to give Crystal Clear Pool & Spa Service a call.'} img={Img4} reverse={true} imgWidth={30} contWidth={60}/>

            </ContentContainer>

            < FullImg sec={1} />

            < ContentContainer text="Pool Maintenance" className="maintenance">

                <p className="txt-ctr">Is your pool in use all summer long? Are you constantly entertaining family and friends in your pool? Do you feel that there is not enough time in the day to keep your pool adequately maintained? If you answered “yes” to any of these questions then you need to call Crystal Clear Pool & Spa Service today.</p>

                {servicesItems}
            
            </ContentContainer>

        </div>
    );
}

export default Services;