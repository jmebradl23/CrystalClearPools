import React from 'react';
import '../../main.css';
import './Nav.css';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.closeDropdown = this.closeDropdown.bind(this);
      }

    state = {
        smallNav: false,
        dropdown: false,
        path:  null
    }

    componentDidMount () {
        window.addEventListener('scroll', this.updateNavbar.bind(this), true);
        window.addEventListener("resize", this.updateNavbar.bind(this), true);
        this.setState({path: this.props.path});
    }

    componentDidUpdate() {
        console.log(this.props.path)
        if(this.props.path !== this.state.path) {
            this.setState({path: this.props.path})
        }
    }

    // componentWillReceiveProps () {
    //     if(this.state.path !== this.props.path) {
    //         this.setState({path: window.location.pathname})
    //     }
    // }
    
    toggleDropdown () {
        this.setState(prevState => ({
            dropdown: !prevState.dropdown
          })
        )
    }

    updateNavbar() {
        if ((window.scrollY) && (window.innerWidth>776)) {
            this.setState({smallNav: true})
        } else if ( window.innerWidth<776 ) {
            this.setState({smallNav: true})
        } else {
            this.setState({smallNav: false})
        }
    }

    closeDropdown (ev) {
        if ( this.state.dropdown ) {
            this.setState({dropdown: false})
        }
    }

    render () {
        return (
            <nav id="topNav" className={ this.state.smallNav ? "black" : "" }>
                <ul className="nav-links"></ul>
                <Link to='/' onClick={this.test} >
                    <div className="logo">
                        <img className="path-update" data-div_id={null} src={logo} alt="Company logo" onClick={this.closeDropdown} />
                    </div>
                </Link>
                {/* <a href="/">
                    <div className="logo">
                        <img src={logo} alt="Company logo"/>
                    </div>
                </a> */}
                <li id="navToggle" className="hamburger sm-show">
                    <FontAwesomeIcon icon={faBars} style={{color:"#000"}} size="2x" onClick={this.toggleDropdown}/>
                </li>
                <div className="container">
                    <div className={ this.state.dropdown ? "slider opened" : "slider closed" }>
                        <ul className="nav-links">
                            <Link to='/about' className={this.state.path==='/about'? 'active about': 'about'} onClick={this.closeDropdown} > 
                                <li data-div_id='/about' className="path-update">About</li>
                            </Link>
                            <Link to='/services' className={this.state.path==='/services'? 'active services': 'services'} onClick={this.closeDropdown} > 
                                <li data-div_id='/services' className="path-update">Services</li>
                            </Link>
                            <Link to='/faq' className={this.state.path==='/faq'? 'active faq': 'faq'} onClick={this.closeDropdown} >
                                <li data-div_id='/faq' className="path-update">FAQ</li>
                            </Link>
                            <Link to='/gallery' className={this.state.path==='/gallery'? 'active gallery': 'gallery'} onClick={this.closeDropdown} >
                                <li data-div_id='/gallery' className="path-update">Gallery</li>
                            </Link>
                            <Link to='/contact' className={this.state.path==='/contact'? 'active contact': 'contact'} onClick={this.closeDropdown} >
                                <li data-div_id='/contact' className="path-update">Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav;