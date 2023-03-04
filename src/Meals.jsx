import React, {useState} from 'react'
import "./Meals.css"

function Meals(getMeal) {
    console.log(getMeal.data)
    return (
        <>
            <div className='card'>
            <img src={getMeal.data.strMealThumb}></img>
            <div className='info'>
                <h2>{getMeal.data.strMeal}</h2>
                <p>{getMeal.data.strArea} Food</p>
            </div>
            <div className='recipe'>
                <h3>Recipe</h3>
                <p>{getMeal.data.strInstructions}</p>
            </div>
            </div>
        </>

    )
}

export default Meals;
