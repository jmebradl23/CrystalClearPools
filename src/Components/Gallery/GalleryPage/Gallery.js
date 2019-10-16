import React from 'react';
import './Gallery.css';
import ImageBox from '../ImageBox/ImageBox';
import Img1 from '../../../img/img1.jpg';
import Img2 from '../../../img/img2.jpg';
import Img3 from '../../../img/img3.jpg';
import Img4 from '../../../img/img4.jpg';


class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {}

    componentDidMount () {}

    render () {
        return (
            <section className="Gallery padding-container">
                <h3 className="txt-ctr">Click on a photo for full view</h3>
                <div className="full-container">
                    < ImageBox id="first" img={Img1} />
                    < ImageBox id="second" img={Img2} />
                    < ImageBox id="third" img={Img3} />
                    < ImageBox id="fourth" img={Img4} />
                </div>
            </section>
        );
    }
}

export default Gallery;