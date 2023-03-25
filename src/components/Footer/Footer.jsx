import React from 'react'
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div> 
            <a href='https://www.linkedin.com/in/ikenna-akano-90ba31221/' target="_blank" > 
                  <GrLinkedinOption  className='icons' size={30} /> 
            </a> 
        </div>

        <div> 
            <a href='https://github.com/ikennaex' target="_blank" > 
                  <AiFillGithub className='icons' size={30} /> 
            </a>  
        </div>
    </div>
  )
}

export default Footer


