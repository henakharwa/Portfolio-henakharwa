// src/components/Contact.js
import React, { useRef, useState } from 'react';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('Sending…');

    const data = new FormData(form.current);

    try {
      const res = await fetch('https://formspree.io/f/mrbqgovo', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });

      if (res.ok) {
        setStatus('Message sent!');
        form.current.reset();
      } else {
        const err = await res.json();
        console.error('Formspree error:', err);
        setStatus('Oops! Something went wrong.');
      }
    } catch (err) {
      console.error('Network error:', err);
      setStatus('Network error.');
    }
  };

  return (
    <div className="contact-container" id="contact">
      <p className="contact-subtitle">REACH OUT TO ME</p>
      <h1 className="contact-title">
        Contact<span className="dot">.</span>
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        // Note: you can also set action/method directly and skip JS entirely:
        // action="https://formspree.io/f/XYZ12345" method="POST"
      >
        <label>Your Name</label>
        <input name="name" type="text" placeholder="Enter your name" required />

        <label>Your Email</label>
        <input
          name="email"
          type="email"
          placeholder="Ex: abc@gmail.com"
          required
        />

        <label>Your Message</label>
        <textarea
          name="message"
          rows="6"
          placeholder="Do you have anything to say?"
          required
        />

        <button type="submit" className="contact-button">
          Send Message
        </button>

        {status && <p className="contact-status">{status}</p>}
      </form>
    </div>
  );
}
