import React from 'react';
import {Link} from 'react-router-dom';

import './Button.css';

function returnJSX (props) {
    if (props.type==="link") {
        return (
            <Link to={props.path} onClick={props.method} style={{ textDecoration: 'none' }}> 
                <li data-div_id={props.path} className={props.classes}>{props.text}</li>
            </Link>
        )
    } else if (props.type==="submit") {
        return (
            <button className={props.classes} type='submit' >{props.text}</button>
        )
    } else {
        return (
            <li className={props.classes} onClick={props.method} >{props.text}</li>
        )
    }
}

function Button (props) {
    return returnJSX(props)
}

export default Button;