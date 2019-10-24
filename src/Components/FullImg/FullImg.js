import React from 'react';

import './FullImg.css';

class FullImg extends React.Component {
// function FullImg () {

    render () {
        return (
            <section className={`FullImg sec-img sec${this.props.sec}`} >
                <h1 className={this.props.text ? 'txt-ctr txt-overlay': 'hidden'} >{this.props.text}</h1>
            </section>
          )
    }
}

export default FullImg;
