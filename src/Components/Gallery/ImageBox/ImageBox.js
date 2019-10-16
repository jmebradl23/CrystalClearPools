import React from 'react';

class ImageBox extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {}

    componentDidMount () {}

    resizeHandler (e) {
        // console.log(e.currentTarget.id)
        let el = e.currentTarget.id;
        el.addClass('expand');
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
            <div id={this.props.id} className="img-container" onClick={this.resizeHandler}>
                <p className="close">x</p>
                <img src={this.props.img} alt="" />
                <h1>This is a test</h1>
            </div>
        );
    }
}

export default ImageBox;