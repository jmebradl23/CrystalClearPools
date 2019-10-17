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
        this.myTest = this.myTest.bind(this);
        // this.myTest.bind(this);
    }

    state = {
        id: null,
        imgBoxes: null
    }

    componentDidMount () {
        // console.log(this.imgContainer.current.childNodes);
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

    myTest (e) {
        // console.log(e.currentTarget.id)
        if (e.currentTarget.id === this.state.id) {
            e.currentTarget.classList.remove('expand')
            this.setState({id: null})
            this.removeFade();
        } else {
            // console.log('different');
            e.currentTarget.classList.add('expand')
            this.setState({id: e.currentTarget.id})
            for(let i=0; i<this.state.imgBoxes.length; i++) {
                if( (e.currentTarget.id != this.state.imgBoxes[i].id) && (this.state.imgBoxes[i].classList.contains('expand'))) {
                    this.state.imgBoxes[i].classList.remove('expand')
                }
            }
            this.addFade()
        }
        return false;

        console.log(e.currentTarget.id);
        for(let i=0; i<this.state.imgBoxes.length; i++) {
            console.log(this.state.imgBoxes[i].id);
            if(this.state.imgBoxes[i].id==='third') {
                this.state.imgBoxes[i].classList.add("mystyle");
            }
        }
    }

    render () {
        return (
            <section className="Gallery padding-container">
                <h3 className="txt-ctr">Click on a photo for full view</h3>
                <div className={ this.state.id ? "grow full-container" : "full-container" } ref={this.imgContainer}>
                    < ImageBox id="first" img={Img1} meth={this.myTest}/>
                    < ImageBox id="second" img={Img2} meth={this.myTest}/>
                    < ImageBox id="third" img={Img3} meth={this.myTest}/>
                    < ImageBox id="fourth" img={Img4} meth={this.myTest}/>
                    < ImageBox id="first" img={Img5} meth={this.myTest}/>
                    < ImageBox id="second" img={Img6} meth={this.myTest}/>
                    < ImageBox id="third" img={Img7} meth={this.myTest}/>
                    < ImageBox id="fourth" img={Img8} meth={this.myTest}/>
                    < ImageBox id="first" img={Img9} meth={this.myTest}/>
                    < ImageBox id="second" img={Img10} meth={this.myTest}/>
                    < ImageBox id="third" img={Img11} meth={this.myTest}/>
                    < ImageBox id="fourth" img={Img12} meth={this.myTest}/>
                    < ImageBox id="first" img={Img13} meth={this.myTest}/>
                    {/* < ImageBox id="second" img={Img14} meth={this.myTest}/> */}
                    < ImageBox id="third" img={Img15} meth={this.myTest}/>
                    < ImageBox id="fourth" img={Img16} meth={this.myTest}/>
                    < ImageBox id="fourth" img={Img17} meth={this.myTest}/>
                    < ImageBox id="fourth" img={Img18} meth={this.myTest}/>
                    < ImageBox id="fourth" img={Img19} meth={this.myTest}/>
                    < ImageBox id="fourth" img={Img20} meth={this.myTest}/>
                </div>
            </section>
        );
    }
}

export default Gallery;