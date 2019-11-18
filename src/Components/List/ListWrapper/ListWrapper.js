import React from 'react';
import './ListWrapper.css';
import ListDetails from '../ListDetails/ListDetails';

function ListWrapper (props) {

    console.log('LW', props)

    return (
        <ul className="List">
            < ListDetails id={props.data.id} title={props.data.title} text={props.data.text}/>
        </ul>
    )

}

export default ListWrapper;
