import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yw5wd7p", // Remplace avec ton SERVICE ID
        "template_gfpn85a", // Remplace avec ton TEMPLATE ID
        form.current,
        "Jc5Tyg2xHffEHksc5" // Remplace avec ta PUBLIC KEY
      )
      .then(
        (result) => {
          console.log("Email envoyé :", result.text);
          setMessageStatus("✅ Message envoyé avec succès !");
          form.current.reset();
        },
        (error) => {
          console.log("Erreur :", error.text);
          setMessageStatus("❌ Erreur lors de l'envoi, réessayez.");
        }
      );
  };

  return (
    <div className="contact-form-content">
      <form ref={form} onSubmit={sendEmail}>
        <div className="name-container">
          <input type="text" name="from_firstname" placeholder="First Name" required />
          <input type="text" name="from_lastname" placeholder="Last Name" required />
        </div>
        <input type="email" name="from_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" rows={3} required />

        <button type="submit">SEND</button>

        {messageStatus && <p className="message-status">{messageStatus}</p>}
      </form>
    </div>
  );
};

export default ContactForm;
