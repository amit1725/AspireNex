import React, { useState } from 'react';
import './ContactStyles.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contact from ${name}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = `mailto:amitbudhodkar2004@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="contact-container">
        <h1 className='sectionTitle'>
            Contact
        </h1>
        <form onSubmit={handleSubmit}>
            <div className='formGroup'>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input 
                  type="text" 
                  name='name' 
                  id='name' 
                  placeholder='name' 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="email" hidden>
                    email
                </label>
                <input 
                  type="email" 
                  name='email' 
                  id='email' 
                  placeholder='email' 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  required 
                />
            </div>
            <div className='formGroup'>
                <label htmlFor="message" hidden>
                    message
                </label>
                <textarea 
                  name='message' 
                  id='message' 
                  placeholder='message' 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                  required 
                ></textarea>
            </div>
            <input type="submit" className='hover btn' value='submit' />
        </form>
    </section>
  );
};

export default Contact;
