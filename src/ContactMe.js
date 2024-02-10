// src/ContactMe.js
import React, { useState } from "react";
import "./ContactMe.css"; // Make sure to include the CSS for styling and spinner

const ContactMe = () => {
  const [formData, setFormData] = useState({
    email: "",
    title: "",
    name: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    // Email validation
    if (!formData.email) {
      formIsValid = false;
      errors["email"] = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      errors["email"] = "Email is invalid.";
    }

    // Name validation
    if (!formData.name.trim()) {
      formIsValid = false;
      errors["name"] = "Name is required.";
    }

    // Message validation
    if (!formData.message.trim()) {
      formIsValid = false;
      errors["message"] = "Message is required.";
    }

    setErrors(errors);
    return formIsValid;
  };

  const submitForm = async () => {
    setIsSubmitting(true);
    console.log(formData);

    try {
      const response = await fetch(
        "https://yu5ih4b1nh.execute-api.us-east-1.amazonaws.com/v1/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Form submitted successfully:", data);

      setFormData({
        email: "",
        title: "",
        name: "",
        phoneNumber: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to submit form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}
      </div>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}
      </div>
      <div>
        <label>Phone Number (Optional):</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <div className="error">{errors.message}</div>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting && <div className="spinner"></div>}
        Submit
      </button>
    </form>
  );
};

export default ContactMe;
