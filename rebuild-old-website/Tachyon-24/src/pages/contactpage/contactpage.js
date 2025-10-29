import React, { useState } from "react";
import { Mail, MapPin, Phone, Globe } from "lucide-react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Footer from "../../components/Footer";
import SmallSparksBackground from "../../components/SmallSparksBackground";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data using EmailJS
    emailjs
      .send(
        "service_520si6k",
        "template_9lppxc9",
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          reply_to: formData.email, // Add this - will allow you to reply to the user's email
          contact_email: formData.email, // Add this - to show user's email in message
          phone: formData.phone,
          message: formData.message,
        },
        "visIKWjtyyVcU-36J"
      )
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send the message. Please try again later.");
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page-container" style={{ width: "100%", background: "#0D0D0D" }}>
      <SmallSparksBackground />
      {/* Header/Breadcrumb */}
      <div className="contact-header">
        <div className="contact-header-content contact-container">
          <h1>Contact Us</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-section contact-container" style={{ background: "black", width: "100%" }}>
        <div className="contact-grid">
          <div className="contact-image" style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src="https://images.wallpapersden.com/image/download/transformers-movie-rise-of-the-beasts_bmZlaW2UmZqaraWkpJRnZm5lrWZobWk.jpg" alt="Contact" style={{ width: "45vw", height: "60vh", objectFit: "cover" }} />
          </div>

          <div className="contact-form-container" style={{ backgroundColor: "black" }}>
            <h2>Get in touch!</h2>
            <p>
              For specific enquiries, kindly email us at{" "}
              <a href="mailto:cse@juetguna.in">tachyon24juet@gmail.com</a>
            </p>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-row" style={{ backgroundColor: "black" }}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "black" }}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "black" }}
                />
              </div>
              <div className="contact-form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{ backgroundColor: "black" }}
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{ backgroundColor: "black" }}
                />
              </div>
              <textarea
                id="message-box"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={10}
                style={{ backgroundColor: "black" }}
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="contact-info-section" style={{ backgroundColor: "black" }}>
        <div className="contact-container" style={{ backgroundColor: "black" }}>
          <div className="contact-info-grid" style={{ backgroundColor: "black" }}>
            {/* Address */}
            <div className="contact-info-card" style={{ backgroundColor: "black" }}>
              <div className="contact-icon">
                <MapPin size={32} />
              </div>
              <p>
                JUET
                <br />
                Mumbai - Agra National Hwy,
                <br />
                Raghogarh-Vijaypur, Guna,
                <br />
                Madhya Pradesh - 473226
              </p>
            </div>

            {/* Phone */}
            <div className="contact-info-card" style={{ backgroundColor: "black" }}>
              <div className="contact-icon">
                <Phone size={32} />
              </div>
              <p>+91-9829119008</p>
            </div>

            {/* Email */}
            <div className="contact-info-card" style={{ backgroundColor: "black" }}>
              <div className="contact-icon">
                <Mail size={32} />
              </div>
              <a href="mailto:cse@juetguna.in"> tachyon24juet@gmail.com</a>
            </div>

            {/* Website */}
            <div className="contact-info-card" style={{ backgroundColor: "black" }}>
              <div className="contact-icon">
                <Globe size={32} />
              </div>
              <a href="https://www.juet.ac.in">www.juet.ac.in</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
