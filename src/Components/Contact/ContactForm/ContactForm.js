import React from 'react';
import './ContactForm.css';

class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '', 
        message: '',
        errorMessages : {
          email: 'Email is invalid',
          phone: 'Phone is invalid',
          text: 'Fields must be at least 3 characters'
        },
        activeErrors: []
      }
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.textInput = React.createRef();
    }

    componentDidMount () {
      this.textInput.current.focus();
    }
  
    handleChange(event) {
      let currentName = event.target.name;
      this.setState({[currentName]: event.target.value});

    }

    checkEmail (email) {
      console.log(email)
      if (!(email)) {return false};
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      } else { return false }
    }

    checkPhone (phone) {
      if ((!(phone))|| (phone=='')) {console.log('phone is empty'); return false};
      if(phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)) {
        return true;
      } else { return false }
    }

    checkText (str) {
      if (!(str)) { return false}
      if(str.length>=3) { return true; }
      else { return false }
    }

    addErrorMsg (str) {
      let msg = this.state.errorMessages[str];
      console.log(msg);
      if (!(this.state.activeErrors.includes(msg))) {
        this.setState(prevState => ({
          activeErrors: [...prevState.activeErrors, msg]
        }))
      }
    }

    removeErrorMsg (str) {
      let msg = this.state.errorMessages[str];
      console.log(msg);

      this.setState(prevState => ({ 
        activeErrors: prevState.activeErrors.filter (err => err !== msg) }))





      // this.setState(prevState => ({
      //   activeErrors: [...prevState.activeErrors, msg]
      // }))
      // let index = this.state.activeErrors.indexOf(msg);
      // let newArr = [...this.state.activeErrors]
      // if (index !== -1) {
      //   newArr.splice(index, 1);
      //   this.setState({activeErrors: newArr});
      // }




      // let position = this.state.activeErrors.indexOf(msg);
      // if (position !== -1) {
      //   this.state.activeErrors.splice(position,1);
      // }
      // console.log('removed errors', this.state.activeErrors)
    }
  
    handleSubmit(event) {
      event.preventDefault();
      if(!(this.checkEmail(this.state.email))) { this.addErrorMsg('email') } else { this.removeErrorMsg('email')}
      if(!(this.checkPhone(this.state.phone))) { this.addErrorMsg('phone') } else { this.removeErrorMsg('phone')}
      if((!(this.checkText(this.state.firstName))) || (!(this.checkText(this.state.lastName))) || (!(this.checkText(this.state.message)))) { this.addErrorMsg('text') } else { this.removeErrorMsg('text')}
    }
  
    render() {
      return (
        <div>
          <div className={this.state.activeErrors.length ? 'error-msgs' : 'hidden'}>
            {this.state.activeErrors.map((err, index) =>
              <p key={index}>
                {err}
              </p>
            )}
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="input-box">
              <label>
                First Name:
                <input ref={this.textInput} focus={true} type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
              </label>
            </div>
            <div className="input-box">
              <label>
                Last Name:
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
              </label>
            </div>
            <div className="input-box">
            <label>
              Phone Number:
              <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
            </label>
            </div>
            <div className="input-box">
            <label>
              Email:
              <input type="text" name="email" value={this.state.email} onChange={this.handleChange} />
            </label>
            </div>
            <div className="input-box">
              <label>
                Message:
                <input type="text" name="message" value={this.state.message} onChange={this.handleChange} />
              </label>
            </div>
            <input className="default-btn" type="submit" value="Submit" />
          </form>
        </div>
      );
    }
  }

  export default ContactForm;