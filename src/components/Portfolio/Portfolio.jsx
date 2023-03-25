import React from 'react'
import PortfolioDiv from './PortfolioDiv'
import "./portfolio.css"
import {recipe, shoppingwebsite, shoppinglist, gpt3, openai} from "./imports"

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
        <div className='portfolio-text'>
            <h2>Portfolio</h2>
        </div>
        <div className='portfolio-grp-div'>
        <PortfolioDiv 
          image = {recipe}
          title = "Recipe App"
          description = "A simple react app to get the recipe for any type of food using an API."
          link = "https://recipeapp-bice.vercel.app"
          gitrepo = "https://github.com/ikennaex/recipeapp" />
        <PortfolioDiv 
          image = {shoppingwebsite}
          title = "Shopping Website"
          description = "A simple shopping website with add to cart functionality built with REACT JS"
          link = "https://shopping-website-lake.vercel.app/"
          gitrepo = "https://github.com/ikennaex/shopping-website" />
        <PortfolioDiv 
          image = {shoppinglist}
          title = "Shopping List"
          description = "A to-do list app built with React JS"
          link = "https://shopping-list-ikennaex.vercel.app/"
          gitrepo = "https://github.com/ikennaex/Shopping-List" />
        <PortfolioDiv 
          image = {gpt3}
          title = "GPT3 UI"
          description = "GPT3 UI design from figma to REACT JS framework"
          link = "https://gpt3-app-black.vercel.app/"
          gitrepo = "https://github.com/ikennaex/gpt-app" />
        <PortfolioDiv 
          image = {openai}
          title = "Image Generator"
          description = "Generates an image with the use of Openai"
          link = "https://gpt3-app-black.vercel.app/"
          gitrepo = "https://github.com/ikennaex/gpt-app" />
        </div>
        </div>
  )
}

export default Portfolio


{/* <div className='portfolio-grp-div'>

<div className='portfolio-div'> 
  <img src={recipe}></img> 

  <div className='text-div'>
    <h3>Food Recipe App</h3>
    <p>A simple react app to get the recipe for any type of food using an API.</p>
  </div>
</div>

<div className='portfolio-div'> 
  <img src={shoppingwebsite}></img> 

  <div className='text-div'>
    <h3>Shopping Website</h3>
    <p>A simple shopping website with add to cart functionality built with REACT JS</p>
  </div>
</div>

<div className='portfolio-div'> 
  <img src={shoppinglist}></img> 

  <div className='text-div'>
    <h3>Shopping List</h3>
    <p>A to-do list app built with React JS</p>
  </div>
</div>

<div className='portfolio-div'> <img src={}></img> </div>
</div>  */}