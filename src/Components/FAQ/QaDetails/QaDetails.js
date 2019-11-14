import React from 'react';

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './QaDetails.css';

class QaDetails extends React.Component {

    state = {
        expanded: false
    }

    accordionHandler = (event) => {
        this.setState(prevState => ({
            expanded: !prevState.expanded
        }))
    }

    render () {
        return (
            <div className={ this.state.expanded ? "qa-detail qa-container expanded" : "qa-detail qa-container" } onClick={this.accordionHandler}>
                <div className="question">
                    <div className="question-container">

                        <FontAwesomeIcon icon={faAngleDown} style={{color:"#000"}} size="2x" className="arrow angle-down"/>
                        <FontAwesomeIcon icon={faAngleUp} style={{color:"orangered"}} size="2x" className="arrow angle-up"/>
                        
                        <p>{this.props.question}</p>
                    </div>
                </div>
                <div className="answer">
                    <p>{this.props.answer}</p>
                </div>
            </div> 
        )
    }
}

export default QaDetails;
