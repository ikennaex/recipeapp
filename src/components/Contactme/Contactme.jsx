import React from 'react'
import "./contactme.css"
import { HiOutlineMail } from "react-icons/hi";

const Contactme = () => {
  return (
    <div className='contactme' id='contact-me'>
        <h2>Contact Me</h2>
        <p>Get in Touch</p>

        <div className='email'><HiOutlineMail size={25} />
          <p>: Ikennaexcel@gmail.com </p>
        </div>
        
    </div>
  )
}

export default Contactme