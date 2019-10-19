import React from 'react';
import './QaDetails.css';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class QaDetails extends React.Component {

    constructor(props) {
        super(props);
        this.accordionHandler = this.accordionHandler.bind(this);
    }

    state = {
        expanded: false
    }

    // componentDidMount () {
    //     console.log(this.state.list)
    // }

    accordionHandler (event) {
        // console.log('clicked')
        this.setState(prevState => ({
            expanded: !prevState.expanded
            })
        )
    }



    // accordionHandler (event) {
        // let target = event.currentTarget;
        // let target = $(e.currentTarget);
        // if ($(e.target.parentNode).hasClass('question-container')) {
        //     // let target = $(e.currentTarget);
        //     console.log('clicked question', e.currentTarget);
        //     if (target.hasClass('expanded')) {
        //         target.removeClass('expanded');
        //     } else {
        //         target.addClass('expanded');
        //     }
        // } else {
        //     console.log(e.target)
        // }
    // }

// function Faq() {
    render () {
        return (
            <div className={ this.state.expanded ? "qa-detail qa-container expanded" : "qa-detail qa-container" } onClick={this.accordionHandler}>
                <div className="question">
                    <div className="question-container">
                        <FontAwesomeIcon icon={faAngleDown} style={{color:"#000"}} size="2x" className="arrow angle-down"/>
                        <FontAwesomeIcon icon={faAngleUp} style={{color:"orangered"}} size="2x" className="arrow angle-up"/>
                        {/* <div className="arrow fa fa-angle-down fa-2x"></div> */}
                        {/* <div className="arrow fa fa-angle-up fa-2x"></div> */}
                        <h4>{this.props.question}</h4>
                        {/* <h2>How much wood could a woodchuck chuck if a woodchuck could chuck wood?</h2> */}
                    </div>
                </div>
                <div className="answer">
                    <p>{this.props.answer}</p>
                    {/* <p>New York state wildlife expert Richard Thomas found that a woodchuck could (and does) chuck around 35 cubic feet of dirt in the course of digging a burrow. Thomas reasoned that if a woodchuck could chuck wood, he would chuck an amount equivalent to the weight of the dirt, or 700 pounds.</p> */}
                </div>
            </div> 
        )
    }
}

export default QaDetails;
