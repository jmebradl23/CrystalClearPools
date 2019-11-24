import React from 'react';

import './FullImg.css';


function FullImg (props) {

    return (
        <section className={`FullImg sec-img sec${props.sec}`} >
            <div className={props.text ? 'txt-ctr overlay': 'hidden'}>
                <h1>{props.text}</h1>
            </div>
        </section>
    )
}

export default FullImg;
