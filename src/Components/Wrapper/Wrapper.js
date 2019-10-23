import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from '../Nav/Nav';
import Faq from '../FAQ/FaqMain/Faq';
import Home from '../Home/Home';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Gallery from '../Carousel/Carousel';
import '../../main.css';

class Wrapper extends React.Component {

    state = { path: null }

    componentDidMount () {
        this.setState({path: window.location.pathname});
        this.updatePath = this.updatePath.bind(this);
        this.setState({path: window.location.pathname})
    }

    componentDidUpdate () {
        window.scrollTo(0, 0);
    }

    updatePath (e) {
        if (((e.target.nodeName==='LI') || (e.target.nodeName==='IMG')) && ( e.target.classList.contains('path-update'))) {
            if(e.target.dataset.div_id !== this.state.path) {
                this.setState({path: e.target.dataset.div_id})
            }
        }
    }

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