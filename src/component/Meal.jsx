import React, { useEffect, useState } from 'react'
import MealCart from './MealCart';

import './meal.css'

const Meal = () => {
    const [meals, setMeals] = useState([]);

    useEffect(()=>{
        fetchData()
        setCard(ac)
    },[])

    // const api = await fetch ('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')

    const fetchData = async()=>{
        const api = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        const {meals} = await api.json()
        setMeals(meals);
        console.log(meals)
    }

    const oc = 'scroll-smooth flex align-middle pt-[4rem] mt-[-300rem]'
    const ac = 'scroll-smooth flex align-middle pt-[4rem] mt-[0rem]'

    const[card,setCard] = useState(oc)

  return (
    <section className={card}>
       <div className=' bg-slate-900 flex align-middle items-center flex-wrap ease-in m-[-1rem] scroll-m-0 justify-center  '>
      {meals.map(meals=>{
        return(
          <div className=' shadow-md rounded-md m-[2rem] h-[30rem] w-[22rem] bg-slate-500' >
            <MealCart  name={meals.strMeal} image={meals.strMealThumb} key={meals.idMeal} id={meals.idMeal} />
          </div>
        )
      })}
    </div>
    </section>
   
  )
}

export default Meal