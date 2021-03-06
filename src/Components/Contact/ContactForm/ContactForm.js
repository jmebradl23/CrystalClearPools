import React, {useState} from 'react';
import Button from "../../Button/Button";
import './ContactForm.css';


function ContactForm() {
  const [name,setName] = useState('');
  const [status,setStatus] = useState('');
  const [email,setEmail] = useState('');
  const [message,setMessage] = useState('');
  const [file] = useState({});

  const encode = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = e => {
    const data = { "form-name": "contact", name, email, message, file }
    
    fetch("/", {
      method: "POST",
      body: encode(data)
    })
      .then(() => setStatus("Form Submission Successful"))
      .catch(error => setStatus("Form Submission Failed"));

    e.preventDefault();
  };

  const handleChange = e => {
    const {name, value} = e.target
    if (name === 'name' ){
      return setName(value)
    }
    if (name === 'email' ){
      return setEmail(value)
    }
    if (name === 'message' ){
      return setMessage(value)
    }
  }

  return (
    <div className="TestForm">

    <form onSubmit={handleSubmit} name="contact" method="POST" action="/contact">
        <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="text" name="email" value={email} onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Message: <textarea name="message" value={message} onChange={handleChange} />
            </label>
          </p>
          <p>
            < Button text="Send" type="submit" classes="default-btn" />
          </p>
        </form>
        <h3 className={status==="Form Submission Successful" ? 'success' : 'fail'} >{status}</h3>
    </div>
  );
}

export default ContactForm;