import React from 'react'
import Meals from "./Meals"
import "./Result.css"

const Result = (props) => {
  return (
    <div className='recipe-result'>
        <div className='food-description'>
            <img src='https://cdn.pixabay.com/photo/2020/02/08/00/32/icon-4828765__340.jpg'></img>
            <h1>{props.data.strMeal}</h1>
            <p>{props.data.strArea}</p>
        </div>

        <div className='recipe-steps'>
            <h1>Recipe</h1>
            <p>{props.data.strInstructions}</p>
        </div>
    </div>


  )
}

export default Result