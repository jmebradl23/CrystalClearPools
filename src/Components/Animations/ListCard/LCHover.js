import React from 'react';
import './LCHover.css';

function LCHover (props) {
    return (
        <div className="lcHover">
            <div>{props.children}</div>
        </div>
    )
}

export default LCHover;