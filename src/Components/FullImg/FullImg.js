import React from 'react';

import './FullImg.css';


function FullImg (props) {

    return (
        <section className={`FullImg sec-img sec${props.sec}`} >
            <h1 className={props.text ? 'txt-ctr txt-overlay': 'hidden'} >{props.text}</h1>
        </section>
    )
}

export default FullImg;
