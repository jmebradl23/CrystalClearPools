import React from 'react';
import Nav from '..//Nav/Nav';
import Faq from '../FAQ/FaqMain/Faq';
import Home from '../Home/Home';
import Services from '../Services/Services';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/GalleryPage/Gallery';

class Wrapper extends React.Component {

    state = {
        path: null
    }

    componentDidUpdate () {
        window.scrollTo(0, 0);
    }

    updatePath (e) {
        console.log(e.target)
        if(e.target.nodeName==='LI'||e.target.nodeName==='BUTTON'||e.target.nodeName==='IMG') {
            if(window.location.pathname !== this.state.path) {
                this.setState({path: window.location.pathname})
                console.log('updating')
            }
        }
    }

    componentDidMount () {
        this.setState({path: window.location.pathname});
        this.updatePath = this.updatePath.bind(this);
    }

    componentWillUnmount () {
    }

    // componentWillReceiveProps(nextProps) {
    //     // console.log('cwrp')
    //     if (nextProps.location !== this.props.location) {
    //     //   console.log('not same')
    //     }
    //   }



    render () {
        return (
            <div onClick={this.updatePath}>
                <Router>
                    <div className="App">
                        <Nav path={this.state.path}/>
                        <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/services" component={Services} />
                        <Route path="/faq" component={Faq} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/" exact component={Home} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
          );

    }
    
}

export default Wrapper;