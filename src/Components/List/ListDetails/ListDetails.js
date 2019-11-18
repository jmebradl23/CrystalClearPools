import React from 'react';
import './ListDetails.css';

function ListDetails (props) {

    return (
        <li key={props.id} className={`ListDetails`}>
            <h5>{props.title}</h5>
            <p>{props.text}</p>
        </li>
    )

}

export default ListDetails;
