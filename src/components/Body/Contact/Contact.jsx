import React, { useState } from "react";
import Topbar from "../Topbar";
import "./contact.css";

function Contact() {
    const[name,setName]=useState("");
    const[mail,setMail]=useState("");
    const[msg,setMsg]=useState("");
    const[display,setDisplay]=useState(false);
    const submitHandler = (e)=>{
        e.preventDefault();
        setName("");
        setMail("");
        setMsg("");
        setDisplay(true)
    }
  return (
    <>
    <nav>
      <Topbar />
      </nav>
      <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
      </div>
      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2>CONTACT</h2>
            <div class="links">
              <div class="link">
                <a
                  href="https://www.instagram.com/prathmesh20_02_/?igshid=YmMyMTA2M2Y%3D"
                  target="blank"
                >
                  <img
                    src="https://img.icons8.com/doodle/30/000000/instagram-new.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="link">
                <a href="https://github.com/PrathmeshJadhav1014" target="blank">
                  <img
                    src="https://img.icons8.com/doodle/48/000000/github--v1.png"
                    alt=""
                  />
                </a>
              </div>
              <div class="link">
                <a href="www.facebook.com" target="blank">
                  <img
                    src="https://img.icons8.com/doodle/48/000000/facebook-new.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="contact-form-wrapper">
          {display && <div className="success">Your Message Sent Successfully !</div> }

            <form onSubmit={submitHandler}>
              <div class="form-item">
                <input type="text" name="sender" value={name} onChange={(e)=>setName(e.target.value)} required />
                <label>Name:</label>
              </div>
              <div class="form-item">
                <input type="text" name="email" value={mail} onChange={e=>setMail(e.target.value)} required />
                <label>Email:</label>
              </div>
              <div class="form-item">
                <textarea class="" name="message" value={msg} onChange={e=>setMsg(e.target.value)} required></textarea>
                <label>Message:</label>
              </div>
              <button class="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
