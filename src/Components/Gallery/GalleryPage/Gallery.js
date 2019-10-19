import React from 'react';
import './Gallery.css';
import ImageBox from '../ImageBox/ImageBox';
import Img1 from '../../../img/gallery/001.jpg';
import Img2 from '../../../img/gallery/002.jpg';
import Img3 from '../../../img/gallery/003tall.jpg';
import Img4 from '../../../img/gallery/004.jpg';
import Img5 from '../../../img/gallery/005.jpg';
import Img6 from '../../../img/gallery/006.jpg';
import Img7 from '../../../img/gallery/007.jpg';
import Img8 from '../../../img/gallery/008tall.jpg';
import Img9 from '../../../img/gallery/009.jpg';
import Img10 from '../../../img/gallery/010.jpg';
import Img11 from '../../../img/gallery/011.jpg';
import Img12 from '../../../img/gallery/012.jpg';
import Img13 from '../../../img/gallery/013.jpg';
// import Img14 from '../../../img/gallery/014.jpg';
import Img15 from '../../../img/gallery/015.jpg';
import Img16 from '../../../img/gallery/016.jpg';
import Img17 from '../../../img/gallery/017.jpg';
import Img18 from '../../../img/gallery/018.jpg';
import Img19 from '../../../img/gallery/019.jpg';
import Img20 from '../../../img/gallery/020.jpg';


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.imgContainer = React.createRef()
        this.imgHandler = this.imgHandler.bind(this);
    }

    state = {
        id: null,
        imgBoxes: null
    }

    componentDidMount () {
        this.setState({imgBoxes: this.imgContainer.current.childNodes})
    }

    removeFade() {
        for(let i=0; i<this.state.imgBoxes.length; i++) {
            if (!(this.state.imgBoxes[i].classList.contains('expand'))) {
                this.state.imgBoxes[i].classList.remove('fade');
            }
        }
    }

    addFade () {
        for(let i=0; i<this.state.imgBoxes.length; i++) {
            if (!(this.state.imgBoxes[i].classList.contains('expand'))) {
                this.state.imgBoxes[i].classList.add('fade');
            } else {
                this.state.imgBoxes[i].classList.remove('fade');
            }
        }
    }

    imgHandler (e) {
        if (e.currentTarget.id === this.state.id) {
            e.currentTarget.classList.remove('expand')
            this.setState({id: null})
            this.removeFade();
        } else {
            e.currentTarget.classList.add('expand')
            this.setState({id: e.currentTarget.id})
            for(let i=0; i<this.state.imgBoxes.length; i++) {
                if( (e.currentTarget.id !== this.state.imgBoxes[i].id) && (this.state.imgBoxes[i].classList.contains('expand'))) {
                    this.state.imgBoxes[i].classList.remove('expand')
                }
            }
            this.addFade()
        }
    }

    render () {
        return (
            <section className="Gallery padding-container">
                <h3 className="txt-ctr">Click on a photo for full view</h3>
                <div className={ this.state.id ? "grow full-container" : "full-container" } ref={this.imgContainer}>
                    < ImageBox id="1" dimens='wide' img={Img1} meth={this.imgHandler}/>
                    < ImageBox id="2" dimens='wide' img={Img2} meth={this.imgHandler}/>
                    < ImageBox id="3" dimens='tall' img={Img3} meth={this.imgHandler}/>
                    < ImageBox id="4" dimens='wide' img={Img4} meth={this.imgHandler}/>
                    < ImageBox id="5" dimens='wide' img={Img5} meth={this.imgHandler}/>
                    < ImageBox id="6" dimens='wide' img={Img6} meth={this.imgHandler}/>
                    < ImageBox id="7" dimens='wide' img={Img7} meth={this.imgHandler}/>
                    < ImageBox id="8" dimens='tall' img={Img8} meth={this.imgHandler}/>
                    < ImageBox id="9" dimens='wide' img={Img9} meth={this.imgHandler}/>
                    < ImageBox id="10" dimens='wide' img={Img10} meth={this.imgHandler}/>
                    < ImageBox id="11" dimens='wide' img={Img11} meth={this.imgHandler}/>
                    < ImageBox id="12" dimens='wide' img={Img12} meth={this.imgHandler}/>
                    < ImageBox id="13" dimens='wide' img={Img13} meth={this.imgHandler}/>
                    {/* < ImageBox id="second" img={Img14} meth={this.imgHandler}/> */}
                    < ImageBox id="14" dimens='wide' img={Img15} meth={this.imgHandler}/>
                    < ImageBox id="15" dimens='wide' img={Img16} meth={this.imgHandler}/>
                    < ImageBox id="16" dimens='wide' img={Img17} meth={this.imgHandler}/>
                    < ImageBox id="17" dimens='wide' img={Img18} meth={this.imgHandler}/>
                    < ImageBox id="18" dimens='tall' img={Img19} meth={this.imgHandler}/>
                    < ImageBox id="19" dimens='wide' img={Img20} meth={this.imgHandler}/>
                </div>
            </section>
        );
    }
}

export default Gallery;