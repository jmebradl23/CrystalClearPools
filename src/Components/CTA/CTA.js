import React from 'react';

import Button from '../Button/Button';

import './CTA.css';

class CTA extends React.Component {

    render () {
        return (

            <div className="CTA">
                <hr className={this.props.borderTop? `hr-${this.props.borderWidth}` : 'hidden'}></hr>
                <p className="txt-ctr">{this.props.text}</p>
                <Button text={this.props.btnText} path={this.props.btnPath} classes={this.props.btnClasses} type={this.props.btnType}/>
                <hr className={this.props.borderBottom? `hr-${this.props.borderWidth}` : 'hidden'}></hr>
            </div>
        )
    }
}

export default CTA;