import React from 'react';
import InlineImg from '../InlineImg/InlineImg';
import Column from '../Column/Column';
import FullImg from '../FullImg/FullImg';
import ContentContainer from '../ContentContainer/ContentContainer';

import longpool from '../../img/longpool.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import about from '../../content/about';
import './Home.css';

function createAboutContent () {
    return (
        about.map((el,i) => {
        return (
            <div key={`${el.title}${i}`} className="third third-cont flex-right">
                <FontAwesomeIcon icon={el.icon} style={{color:"#000", margin: "0 auto", display: "block"}} size="3x" />
                <hr className="hr-25"></hr>
                < Column title={el.title} text={el.text} />
            </div>
        )
        }) 
    )
}

function Home () {
    return (
        <div className="Home">
            < FullImg text="Pool Service, Spa Repairs and Pool Maintenance in Napa and surrounding areas" sec={1}/>
            < ContentContainer text="About Us">
                <div className="triplet-flex">{createAboutContent()}</div>
            </ContentContainer>
            < FullImg sec={2}/>
            < ContentContainer>
                < InlineImg title={'A Commitment to Customer Satisfaction'} description={'Crystal Clear Pool & Spa Service is one of the few Napa pool maintenance and repair companies to offer complete swimming pool maintenance and repair services for extremely affordable prices. This means that no matter the size of your project or number of Napa pool maintenance or repair services you require, you can trust that every step of the process will be expertly handled by the same company. Our work is always guaranteed, and we make sure that you are kept up-to-date on our progress and on any and all aspect of the work that may bring changes to the schedule or work order. If you are a Napa pool owner and would like more information on the pool maintenance and repair services we offer, do not hesitate to call us today. We will be happy to schedule a free estimate at your earliest convenience.'} tag={'Call us now! (707) 252-8255'} img={longpool} reverse={false} imgWidth={30} contWidth={60}/>
            </ContentContainer>
        </div>
    )
}

export default Home;