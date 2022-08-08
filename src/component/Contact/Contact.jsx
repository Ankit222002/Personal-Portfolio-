import React, { useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
export const Contact = () => {
    const form = useRef();

    const  [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  

      emailjs.sendForm(' service_xamxxqq', 'template_zcomkjs', form.current, '46-yHO7CNKPTZn8ZC')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awsome">
                <span>Get in touch</span>
                <br/>
                <span className='touch'>Contact me</span>
                <div
                className='blur s-blur1'
                style={{bacground:"#ABF1FF94"}}
                > </div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit ={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name"/>
                <input type="e-mail" name="user_e-mail" className="user" placeholder="e-mail"/>
                <input  type="message" name="user" className="user1" placeholder="Message"/>
                <input type="submit" value="send" className="button"/>
                <span>{done && "Thanks for contacting me"}</span>
                <div 
                className='blur c-blurl'
                style={{background: "var(--purple)"}}>
                </div>

            </form>
        </div>
    </div>
  )
}
