import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const formRef = useRef(); 

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm(
      'service_bykx6p6',   
      'template_2lph7wt',  
      formRef.current,     
      'AdIf6DncMW8tiTNQR'    
    )
    .then(
      (result) => {
        console.log('Email successfully sent!', result.text);
        toast.success('Details sent successfully!');  
      },
      (error) => {
        console.error('Error sending email:', error.text);
        toast.error('Failed to send details.'); // Show error notification
      }
    );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <>
      <div className="main-container">
        <div className="contact-container">
          <div className="owner-information">
            <h2>Contact Us</h2>
            <p>
              <strong>VSM International</strong><br />
              Contact No.: +91 9863527523<br />
              Email ID: vsminternational@gmail.com<br />
              Website: www.vsminternational.com
            </p>
          </div>

          <div className="form-container">
            <h2>Send Us A Message</h2>
            <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
              <div className="form-group">
                <input type="text" name="firstName" placeholder="First Name" required />
                <input type="text" name="lastName" placeholder="Last Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" required />
                <input type="number" name="mobile" placeholder="Mobile No." required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer /> {/* Toast notification container */}
    </>
  );
};

export default Contact;
