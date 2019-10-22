import React from 'react';
import './Carousel2.css';
import Button from '../Button/Button';
import Img1 from '../../img/gallery/001.jpg';
import Img2 from '../../img/gallery/003tall.jpg';
import Img3 from '../../img/gallery/002.jpg';
import Img4 from '../../img/gallery/004.jpg';
import Img5 from '../../img/gallery/005.jpg';
import Img6 from '../../img/gallery/006.jpg';
import Img7 from '../../img/gallery/007.jpg';
import Img8 from '../../img/gallery/008tall.jpg';
import Img9 from '../../img/gallery/009.jpg';
import Img10 from '../../img/gallery/010.jpg';
import Img11 from '../../img/gallery/011.jpg';
import Img12 from '../../img/gallery/012.jpg';
import Img13 from '../../img/gallery/013.jpg';
import Img15 from '../../img/gallery/015.jpg';
import Img16 from '../../img/gallery/016.jpg';
import Img17 from '../../img/gallery/017.jpg';
import Img18 from '../../img/gallery/018.jpg';
import Img19 from '../../img/gallery/019.jpg';
import Img20 from '../../img/gallery/020.jpg';

class Carousel extends React.Component {
    constructor(props) {
      super(props)
      this.decreaseHandler = this.decreaseHandler.bind(this);
      this.increaseHandler = this.increaseHandler.bind(this);
      this.countCheck = this.countCheck.bind(this);
    }

    state = {
        images: [Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12,Img13,Img15,Img16,Img17,Img18,Img19,Img20],
        imagesLength: 0,
        image: 1,
        mainImg: 2,
        leftImg: 1,
        rightImg: 3
    }

    decreaseHandler () {
        this.setState({mainImg: this.countCheck(this.state.mainImg, false)})
        this.setState({leftImg: this.countCheck(this.state.leftImg, false)})
        this.setState({rightImg: this.countCheck(this.state.rightImg, false)})
    }

    increaseHandler () {
        this.setState({mainImg: this.countCheck(this.state.mainImg, true)})
        this.setState({leftImg: this.countCheck(this.state.leftImg, true)})
        this.setState({rightImg: this.countCheck(this.state.rightImg, true)})
    }
 
    countCheck (num, direction) {
        console.log(num, direction)
        if (direction) {
            if (num+1 === this.state.imagesLength) {
                return 0
            } else {
                return num+1;
            }
        } else {
            if ((num-1)<0) {
                return this.state.imagesLength-1
            } else {
                return num-1;
            }
        }
    }
    
    componentDidMount () {
        this.setState({imagesLength: this.state.images.length})
    }

    render () {
        return (
            <section className="section-images sm-show Carousel">
                <ul class="duet-flex btn-list">
                    < Button text="Prev" classes="default-btn" method={this.decreaseHandler} />
                    < Button text="Next" classes="default-btn" method={this.increaseHandler} />
                </ul>
                    <img src={this.state.images[this.state.mainImg]} />
            </section>
        )
    }
}

export default Carousel;