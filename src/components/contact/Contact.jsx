import React from "react";
import "./contact.css";
import {
  HiOutlineMail,
  HiOutlineArrowSmRight,
  HiOutlineChat,
} from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const emailAddress = "saradshrestha1992@gmail.com";
  const whatsappNumber = "9813951586";

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Let's Connect</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        {/* Email Section */}
        <div className="contact__section">
          <h3 className="contact__title">Email</h3>
          <div className="contact__info">
            <div className="contact__card">
              <HiOutlineMail className="contact__card-icon" />
              <span className="contact__card-data">{emailAddress}</span>
              <a href={`mailto:${emailAddress}`} className="contact__button">
                Send Email
                <HiOutlineArrowSmRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* Messenger Section */}
        <div className="contact__section">
          <h3 className="contact__title">Messenger</h3>
          <div className="contact__info">
            <div className="contact__card">
              <HiOutlineChat className="contact__card-icon" />
              <span className="contact__card-data">Connect via Messenger</span>
              <a
                href="https://www.facebook.com/profile.php?id=100071115797464" // Replace with your Messenger link
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                Message Me
                <HiOutlineArrowSmRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        {/* WhatsApp Section */}
        <div className="contact__section">
          <h3 className="contact__title">WhatsApp</h3>
          <div className="contact__info">
            <div className="contact__card">
              <FaWhatsapp className="contact__card-icon" />
              <span className="contact__card-data">Reach me on WhatsApp</span>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__button"
              >
                Message Me
                <HiOutlineArrowSmRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
