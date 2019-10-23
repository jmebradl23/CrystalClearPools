import React from 'react';

import './ContentContainer.css';

class ContentContainer extends React.Component {
    constructor (props) {
        super(props)
    }

    render () {
        return (
            <section className={`Content ${this.props.classes}`}>
                <h2 className={this.props.text ? "txt-ctr" : "hidden"} > {this.props.text}</h2>
                <div>{this.props.children}</div>
            </section>
        )
    }
}

export default ContentContainer;