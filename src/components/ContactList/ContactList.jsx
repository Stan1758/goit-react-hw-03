import React from "react";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

function ContactList({ contacts }) {
  return (
    <ul className={s.wrapper}>
      {contacts.map((contact) => (
        <Contact key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </ul>
  );
}

export default ContactList;
