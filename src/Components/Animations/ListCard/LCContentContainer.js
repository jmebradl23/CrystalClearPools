import React from 'react';
import './LCContentContainer.css';

function LCContentContainer (props) {
    return (
        <div className="lcContentContainer">
            {props.children}
        </div>
    )
}

export default LCContentContainer;