import React from 'react';

import './InlineImg.css';

class InlineImg extends React.Component {

    state = {
       reverse: false 
    }

    componentDidMount () {
        this.setState(prevState => ({
            reverse: this.props.reverse
            })
        )
    }

    render () {
        return (
            <div className='duet-flex InlineImg'>
                <div className={ this.state.reverse ? `half half-cont flex-right inline-${this.props.contWidth}` : `half half-cont flex-left inline-${this.props.contWidth}` } >
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <h5 className={this.props.tag ? '' : 'hidden'}>{this.props.tag}</h5>
                </div>
                <div className={ this.state.reverse ? `half half-cont flex-left inline-${this.props.imgWidth}` : `half half-cont flex-right inline-${this.props.imgWidth}` }>
                    <div className="img-container">
                        <div className="img_holder">
                            <img src={this.props.img} alt="beautiful"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InlineImg;