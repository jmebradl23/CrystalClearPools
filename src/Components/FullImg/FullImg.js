import React from 'react';

class FullImg extends React.Component {
// function FullImg () {

    render () {
        return (
            <section>
                <section className={`sec-img sec${this.props.sec}`} >
                    <h1 className={this.props.text ? 'txt-ctr txt-overlay': 'hidden'} >{this.props.text}</h1>
                </section>
            </section>
          )
    }
}

export default FullImg;
