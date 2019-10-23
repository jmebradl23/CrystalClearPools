import React from 'react';

import './List.css';

class List extends React.Component {

    render () {
        return (
            <ul className="List">
                {this.props.items.map((el, index) => (
                    <li>
                        <h5>{el.title}</h5>
                        <p>{el.text}</p>
                        <hr className={index<this.props.items.length-1?'lg-hidden hr-10':'hidden'}></hr>
                    </li>
                ))}
            </ul>
        )
    }
}

export default List;
