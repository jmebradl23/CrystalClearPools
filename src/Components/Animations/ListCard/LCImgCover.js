import React from 'react';
import './LCImgCover.css';

function LCImgCover (props) {
    return (
        <div className="lcImgCover">
            {props.children}
        </div>
    )
}

export default LCImgCover;