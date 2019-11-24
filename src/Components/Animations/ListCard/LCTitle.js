import React from 'react';
import './LCTitle.css';

function LCTitle (props) {
    return (
        <div className="lcTitle">
            <h4>{props.title}</h4>
        </div>
    )
}

export default LCTitle;