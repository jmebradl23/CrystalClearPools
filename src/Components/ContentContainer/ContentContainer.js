import React from 'react';

import './ContentContainer.css';

function ContentContainer (props) {

    return (
        <section className={`Content ${props.classes}`}>
            <h2 className={props.text ? "txt-ctr page-title" : "hidden"} > {props.text}</h2>
            {props.children}
        </section>
    )
}

export default ContentContainer;