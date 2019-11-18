import React from 'react';


function Column (props) {

        return (
            <div>
                <h4 className="txt-ctr">{props.title}</h4>
                <p className="txt-ctr">{props.text}</p>
            </div>
        )
}

export default Column;