import React from 'react';

class Column extends React.Component {

    render () {
        return (
            <div>
                <h4 className="txt-ctr">{this.props.title}</h4>
                <p className="txt-ctr">{this.props.text}</p>
            </div>
        )
    }
}

export default Column;