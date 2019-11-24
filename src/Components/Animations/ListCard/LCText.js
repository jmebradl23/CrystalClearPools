import React from 'react';
import './LCText.css';

function LCText (props) {
    return (
        <div className="lcText">
            <p>{props.text}</p>
        </div>
    )
}

export default LCText;