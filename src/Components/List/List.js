import React from 'react';

import './List.css';

function List (props) {

    return (
        <ul className="List">
            {props.items.map((el, index) => (
                <li key={`${props.keyName}${index}`}>
                    <h5>{el.title}</h5>
                    <p>{el.text}</p>
                    <hr className={index<props.items.length-1?'lg-hidden hr-10':'hidden'}></hr>
                </li>
            ))}
        </ul>
    )

}

export default List;
