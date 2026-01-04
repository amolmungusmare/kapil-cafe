"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import styles from './contact.module.css'

interface ContactParams {
  name: string,
  email: string,
  number: string
}

const sendContactData = async (contactDetails: ContactParams) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }
}


const Contact = () => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredName, setEnteredName] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');

  const sendMessageHandler = async (event: any) => {
    event.preventDefault();

    // optional: add client-side validation

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        number: enteredNumber,
      });
      
    } catch (error: any) {
      console.log('error', error)
    }
  }
  return (
    <section className={styles.contact} id="contact">

      <h1 className="heading"> <span>contact</span> us </h1>

      <div className={styles.row}>

        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3721.82145167268!2d79.05659764!3d21.11968339!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c16ab97963a9%3A0xda2ed05ee7f4a0b2!2sTexas%20Smoke%20Shop%20%5B%20Mate%20Square%20%5D!5e0!3m2!1sen!2sin!4v1767429704256!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>

        <form onSubmit={sendMessageHandler}>
          <h3>get in touch</h3>
          <div className={styles.inputBox}>
            <span className="fas fa-user"></span>
            <input type="text" placeholder="name"
              id='name'
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
          <div className={styles.inputBox}>
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="email" id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)} />
          </div>
          <div className={styles.inputBox}>
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="number"
              required
              value={enteredNumber}
              onChange={(event) => setEnteredNumber(event.target.value)}
            />
          </div>
          <input type="submit" value="contact now" className="btn" />
        </form>

      </div>

    </section>
  );
};

export default Contact;