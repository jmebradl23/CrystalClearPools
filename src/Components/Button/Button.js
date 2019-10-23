import React from 'react';
import '../../main.css';
import './Button.css';
import {Link} from 'react-router-dom';

class Button extends React.Component {

    render () {
        if (this.props.type==="link") {
            return (
                <Link to={this.props.path} onClick={this.props.method} style={{ textDecoration: 'none' }}> 
                    <li data-div_id={this.props.path} className={this.props.classes}>{this.props.text}</li>
                </Link>
            )
        } else if (this.props.type==="submit") {
            return (
                <button className={this.props.classes} type='submit' >{this.props.text}</button>
            )
        } else {
            return (
                <li className={this.props.classes} onClick={this.props.method} >{this.props.text}</li>
            )
        }
    }
}

export default Button;