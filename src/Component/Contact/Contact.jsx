import React, { useState } from "react";
import "./Contact.css";
import FAQ from "../F&Q/F&Q";
import Footer from "../Footer/Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      message,
    };

   
    fetch("https://example.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
            <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              />
          </div>

          <div className="form-group">
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              />
          </div>

          <button type="submit">Send Message</button>

          {success && (
              <p className="success-message">Message sent successfully!</p>
            )}
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          Phone: +91 22 1234 5678
          <br />
          Email: <a href="mailto:info@example.com">info@example.com</a>
          <br />
          Address: 123, MG Road, Mumbai, Maharashtra 400001
        </p>

        <iframe
          width="600"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.549531142555!2d72.83106251496015!3d19.07598398701037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9f6e4e4e4e5%3A0x6f4f4f4f4f4f4f4f!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1677891155555!5m2!1sen!2sin"
          />
      </div>
          <FAQ/>
          <Footer/>
    </div>
    
  );
};

export default Contact;
