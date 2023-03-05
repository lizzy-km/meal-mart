import React from 'react'
import {GiHotMeal} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Navbar = () => {
  const [meals, setMeals] = useState([]);



  const [name,setName] = useState()


  // const api = await fetch ('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')

  
  const ai = ' item rounded-b-[.5rem]  bg-slate-700 '
  const oi = 'bg-slate-800 h-[0rem]'
  const search ='Search'
  const empty ='';
  const [val,setVal]=useState(search)
  const [ic,setIc]=useState(oi) 
  const input =event=>{
    
    // setVal(empty)
    setIc(ai);
  }
  const [it,setIt]=useState()

  const idata =  meals.map((item)=>{
            
    return(
      
      <Link  to={`/detail/${item.idMeal}`} id={item.idMeal} className=' gap-2 tracking-wide font-medium text-sm rounded-[.4rem] m-[.2rem] bg-slate-400 items-center p-[.5rem] flex justify-left flex-row item-c h-[2rem] text-slate-800 '>
<Link  to={`/detail/${item.idMeal}`}>
<img className=' object-cover border-2 border-slate-700 rounded-[100%] w-[1.4rem] h-[1.4rem]' src={item.strMealThumb} alt=""/>
</Link>
<Link  to={`/detail/${item.idMeal}`}>
<p>{item.strMeal}</p>
</Link>

</Link>
    )
      
    

    })
 
  
  const type =event=>{
    setVal(event.currentTarget.value);
    setIt(idata)
  }
  useEffect(()=>{
  
    fetchData()
  
 
},[type])
  const fetchData = async()=>{
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
    const {meals} = await api.json()
    if(meals[0].idMeal | meals[0]!==null){
      setMeals(meals);
      console.log(meals)
    }
   
}



  return (
    <div className=' fixed w-screen z-50 flex justify-between shadow-lg p-[1.3rem] bg-slate-700'>
        <NavLink to={'/'}>
           <GiHotMeal className=' mt-[-0.4rem] text-white text-3xl'/>
        </NavLink>
        <div>
            <div className=' absolute left-[80%]'>
            <input onClick={input} onChange={type} className=' rounded-md bg-slate-200' type="text" value={val}/>

            <div className={ic} >
           
           {it}
              
            </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Navbar