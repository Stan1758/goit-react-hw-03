import React from "react";
import s from "./Contact.module.css";
import { RiContactsFill } from "react-icons/ri";
import { BsTelephoneFill } from "react-icons/bs";

function Contact({ name, number }) {
  return (
    <li className={s.list}>
      <div className="div">
        <p>
          <RiContactsFill style={{ marginRight: "8px" }} />
          {name}
        </p>
        <p>
          <BsTelephoneFill style={{ marginRight: "8px" }} />
          {number}
        </p>
      </div>
      <button className="btn">Delete</button>
    </li>
  );
}

export default Contact;
