import React from 'react';

class ImageBox extends React.Component {
    constructor(props) {
        super(props);
        this.resizeHandler = this.resizeHandler.bind(this);
    }

    state = {
        id: null,
        expand: false,
        fade: false
    }

    componentDidMount () {}

    resizeHandler (e) {
        console.log(this.state.id, e.currentTarget.id)
        if(this.state.id===e.currentTarget.id) {
            this.setState({expand: false, id: null});
        } else {
            this.setState({expand: true, id: e.currentTarget.id});
        }
        // console.log(e.currentTarget.id)
        // let el = e.currentTarget.id;
        // console.log(this.props.id);
        // console.log(this.state.id)
        // console.log(el[0].id)
        // $('.expand').each(function (index, ex) {
        //     if(ex.id!=el[0].id) {
        //         $(ex).removeClass('expand');
        //     }
        // })
    
        // if (el.hasClass('expand')) {
        //     el.removeClass('expand');
        //     removeFade();
        // } else {
        //     el.addClass('expand');
        //     el.removeClass('fade');
        //     addFade ();
        // }
    };

    render () {
        return (
            <div id={this.props.id} className={ this.state.expand ? "expand img-container" : "img-container" } onClick={this.props.meth}>
                <p className="close">x</p>
                <img src={this.props.img} alt="" />
            </div>
        );
    }
}

export default ImageBox;