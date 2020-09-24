import React from 'react';
import InlineImg from '../InlineImg/InlineImg';
import CTA from '../CTA/CTA';
import FullImg from '../FullImg/FullImg';
import ContentContainer from '../ContentContainer/ContentContainer';

import aboutUsPage from '../../content/aboutUsPage';
import './About.css';

function createAboutContent () {
  return aboutUsPage.map((el, i) => {
    return (
      < InlineImg key={el.id} description={el.description} img={el.image} reverse={i%2===0} imgWidth={30} contWidth={60}/>
    )
  })
}

function About (props) {
  return (
    <div className="About">
      < FullImg sec={1} />
      <ContentContainer text="About Us">
        {createAboutContent()}
        < CTA borderTop={false} borderBottom={false} borderWidth="25" text="If you would like more information, or would like to inquire about pool maintenance & service, please do not hesitate to contact us." btnText='Contact Us' btnPath="/contact" btnClasses="path-update default-btn" btnType="link"/>
      </ContentContainer>
    </div>
  );
}

export default About;