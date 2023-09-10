import React, { useState } from "react";
import styles from "./../assets/styles/Contact.module.css";

const Contact = () => {
  const [inquire, setInquire] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = inquire;
  const handleChange = (e) => {
    setInquire((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert(
      `Hi ${name}! Thank you for contacting us. We appreciate your inquiry and our team will get back to you soon. You can expect a reply via email within 24-48 hours.`
    );
    // Reset form fields
    setInquire({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.container}>
      {/* <div className={styles.model}>Hi How are you</div> */}
      <h2 className={styles.container__heading}>Contact Us</h2>
      <form className={styles.container__form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" value={message} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
