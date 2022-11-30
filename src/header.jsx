import React, {useState}from "react"
import Meals from "./Meals"
import "./header.css"
import foodimg from "./assets/images/foodimg.jpg"

function Header() {
    const [search, setSearch] = useState("");
    const [myMeal, setMeal] = useState();

    function handleChange(e) {
        setSearch(e.target.value)
    }

    function searchMealKey(e) {
        if (e.key == "Enter") {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setMeal(data.meals)
                console.log(myMeal)
            })
        }
    }

    function searchMeal() {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setMeal(data.meals)
            console.log(myMeal)
        })
    }

    return (
        <div>
        <div className="title">
        <div className="header-text">
        <h1>Recipe App</h1>
        <p>Type a food name and click search</p>
        </div>
        <img className="food-img" src = {foodimg}></img>
        </div>
        <input placeholder="search for a recipe" onChange={handleChange} onKeyDown ={searchMealKey} value = {search}></input>
        <button onClick={searchMeal}>Search</button>

        <div className='meal-section'>
        {
            (myMeal == null)? <p>Not Found</p> : myMeal.map((res) => {
                return(
                    <Meals data = {res}/>
                )
            })
        }
        
        </div>

        </div>
    )
}

export default Header;