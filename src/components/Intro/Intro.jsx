import React from 'react'
import "./intro.css"
import {ikenna} from "./imports"
import TypeWriterEffect from 'react-typewriter-effect';

const Intro = () => { 
  
  return (
    <div className='intro-div'>
        <div className='intro-text'>
        <h2>Hi, I'm</h2>
        
        <h1>
          <TypeWriterEffect
            textStyle={{ fontFamily: 'Manrope' }}
            startDelay={100}
            cursorColor="white"
            text="Ikenna Akano"
            typeSpeed={200}
            hideCursorAfterText = {true}
          />
        </h1>
        
        <p>Web Developer</p>
        </div>

        <div className='img-div'>
            <img src= {ikenna} ></img>
        </div>
    </div>
  )
}

export default Intro