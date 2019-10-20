import React from 'react';
import './InlineImg.css';
// import longpool from '../../img/longpool.jpg';

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

    // componentDidMount () {
    //     window.addEventListener('scroll', this.updateNavbar.bind(this), true);
    //     window.addEventListener("resize", this.updateNavbar.bind(this), true);
    // }



// function InlineImg (props) {
    render () {
        return (
            // <div>
                <div className='duet-flex'>
                    <div className={ this.state.reverse ? `half half-cont flex-right inline-${this.props.contWidth}` : `half half-cont flex-left inline-${this.props.contWidth}` } >
                    {/* <div className={ this.state.reverse ? "half half-cont right" : "half half-cont left" } > */}
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                        <h5 className={this.props.tag ? '' : 'hidden'}>{this.props.tag}</h5>
                    </div>
                    <div className={ this.state.reverse ? `half half-cont flex-left inline-${this.props.imgWidth}` : `half half-cont flex-right inline-${this.props.imgWidth}` }>
                        <div className="img-container">
                            <div className="img_holder">
                                <img src={this.props.img} alt="beautiful"/> 
                                {/* <div className={`inling-${this.props.imgWidth}`}>hello</div>    */}
                            </div>
                        </div>
                    </div>
                </div>
            // </div>
        );
    }
}

export default InlineImg;