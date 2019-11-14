import React from 'react';

// class Column extends React.Component {
function Column (props) {

    // render () {
        return (
            <div>
                <h4 className="txt-ctr">{props.title}</h4>
                <p className="txt-ctr">{props.text}</p>
            </div>
        )
    // }
}

export default Column;