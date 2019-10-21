import React from 'react';
import './Gallery2.css';
import Carousel from "../../Carousel/Carousel";

class Gallery extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
    }

    render () {
        return (
            <section className="Gallery">
                < Carousel />
            </section>
        );
    }
}

export default Gallery;