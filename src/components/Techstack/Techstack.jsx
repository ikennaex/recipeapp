import React from 'react'
import {react, css, bootstrap, js, nodejs, html, express, photoshop, tailwind, git, figma} from "./imports"
import "./techstack.css"

const Techstack = () => {
  return (
    <div className='tech-stack' id='stack'>
      <div className="tech-stack-txt">
        <h2>Tech Stack</h2>
      </div>

      <div className='tech-stack-items'>
        <div> <img className='html' src={html} ></img> <p>HTML</p> </div>
        <div> <img className='css' src={css} ></img> <p>CSS</p> </div>
        <div> <img className='bootstrap' src={bootstrap} ></img> <p>Bootstrap</p> </div>
        <div> <img className='js' src={js} ></img> <p>Javascript</p> </div>
        <div> <img className='react' src={react} ></img> <p>React JS</p> </div>
        <div> <img className='node' src={nodejs} ></img> <p>Node JS</p> </div>
        <div> <img className='express' src={express} ></img> <p>Express JS</p> </div>
        <div> <img className='tailwind' src={tailwind} ></img> <p>Tailwind</p> </div>
        <div> <img className='git' src={git} ></img> <p>Git</p> </div>
        <div> <img className='photoshop' src={photoshop} ></img> <p>Photoshop</p> </div>
        <div> <img className='figma' src={figma} ></img> <p>Figma</p> </div>
      </div>
    </div>
  )
}

export default Techstack