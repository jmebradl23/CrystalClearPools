import React from 'react';

import Button from '../Button/Button';

import './CTA.css';

function CTA (props) {

    return (
        <div className="CTA">
            <hr className={props.borderTop? `hr-${props.borderWidth}` : 'hidden'}></hr>
            <p className="txt-ctr">{props.text}</p>
            <Button text={props.btnText} path={props.btnPath} classes={props.btnClasses} type={props.btnType}/>
            <hr className={props.borderBottom? `hr-${props.borderWidth}` : 'hidden'}></hr>
        </div>
    )
}

export default CTA;