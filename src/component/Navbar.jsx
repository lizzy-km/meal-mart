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

  
  const ai = '   sh p-[.5rem]  item rounded-b-[.5rem]  bg-slate-900 '
  const oi = '   bg-slate-400 h-[0rem]'
  const search ='  Search food'
  const empty ='';
  const [val,setVal]=useState(search)
  const [ic,setIc]=useState(oi) 
 
  const [it,setIt]=useState()

  const idata =  meals.map((item)=>{
            
    return(
      
      <Link onClick={"window.location.reload"}  to={`/detail/${item.idMeal}`} id={item.idMeal} className=' sh  id gap-2 tracking-wide  rounded-[.4rem] m-[.2rem] shadow-slate-50 shadow-sm z-10 bg-slate-900 items-center p-[.5rem] flex  justify-left flex-row item-c h-auto text-slate-800 '>
<Link onClick={"window.location.reload"}  to={`/detail/${item.idMeal}`}>
<img className='z-10 i-img object-cover border-2 border-slate-700 rounded-[100%]' src={item.strMealThumb} alt=""/>
</Link>
<Link onClick={"window.location.reload"}  to={`/detail/${item.idMeal}`}>
<p className=' z-10 text-slate-200'>{item.strMeal}</p>
</Link>

</Link>
    )
      
    

    })
 
    const input =event=>{
    
      setVal(empty)
      
    }
  
  const type =event=>{
    setVal(event.currentTarget.value);
    setIc(ai);
    
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
    <div className=' z-10  shadow-slate-600  shadow-sm fixed w-screen  flex justify-between  p-[1.3rem] bg-slate-900'>
        <NavLink to={'/'}>
           <GiHotMeal className=' mt-[-0.4rem] text-white text-3xl'/>
        </NavLink>
        <div>
            <div className=' inp max-[750px]:left-[50%] max-[750px]:w-[10rem]  absolute left-[80%]'>
            <input onClick={input} onChange={type} className=' max-[750px]:w-[11rem] opacity-90 text-slate-900  rounded-md bg-slate-200' type="text" value={val}/>

            <div className={ic} >
           
           {it}
              
            </div>
            </div>
            
        </div>
    </div>
    
  )
}

export default Navbar