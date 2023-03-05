import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Ingerdients from './Ingerdients';
import Instructions from './Instructions';

import {AiFillYoutube} from 'react-icons/ai'

const Detail = () => {
    const {id} = useParams();
    const [meals, setMeals]=useState({})

    useEffect(()=>{
        fetchMeal();
    },[])
    const fetchMeal = async()=>{
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const {meals} = await api.json();
        setMeals(meals[0]);
        console.log(meals[0]);

    }
    const oc = 'ml-[100rem] border-slate-300  border-l-2  rounded-l-[15rem] border-t-2 flex p-[2rem] gap-[4rem]'
    const ac ='ml-[0rem] max-[750px]:flex-wrap max-[750px]:border-l-0 border-slate-300  border-l-2 max-[750px]:rounded-l-[11rem]  rounded-l-[14rem] border-t-2 flex  p-[1rem] gap-[4rem]'
    
    const [card,setCard]=useState(oc);

    useEffect(()=>{
        setCard(ac)
    },[])

    const nor = 'tracking-wide  rounded-xl hover:text-[1.2rem]  p-[.5rem] border'
    const active = ' bg-slate-800 tracking-wide rounded-xl  p-[.5rem] border'
    const[bt,setBt]=useState(nor)
    const[bt1,setBt1]=useState(nor)

    const sdata2 = <Ingerdients item={meals} idata={meals}  />
    const sdata1=<Instructions   category={meals.strCategory} country={meals.strArea} instru={meals.strInstructions} yt={meals.strYoutube} className=' text-slate-200 pt-[1.6rem] max-w-[40rem]'/>
    const [show,setShow]=useState(sdata1)
     const inger =()=>{
        setShow(sdata2)
        setBt(active)
        setBt1(nor)
     }
     const instr =()=>{
        setShow(sdata1)
        setBt1(active)
        setBt(nor)
     }



  return (
    <section className='overflow-x-hidden  p-[1rem] pt-[2.4rem] text-slate-200 h-screen bg-slate-900 flex flex-col'>
            <div className='  p-[2rem] mb-[-2rem]'>
                <div>
                <h2 className=' tracking-wide  font-semibold text-2xl'>{meals.strMeal}</h2>
               
                <a href={meals.strYoutube}  className=' max-[750px]:mb-[-1rem] mb-[-4rem] ml-[-1rem] flex justify-left align-middle p-[1rem]'>
        <AiFillYoutube className=' text-red-600 mr-[.6rem] text-[2rem]'/>
    <a href={meals.strYoutube} className='tracking-wide font-semibold text-xl' >Watch on Youtube </a>
    </a>
                </div>
                 <div className=' max-[750px]:pb-[0rem]  pb-[1rem] h-[4rem] pr-[1.5rem] flex justify-center gap-[1rem]'>
                <button className={bt} onClick={inger}>Ingerdients</button>
                 <button className={bt1} onClick={instr}>Instructions</button>
                </div>
                
            </div>
   <div className={card}>
    <div className=' pt-[1.8rem]'>
    
    <img className=' hover:p-[.3rem] mt-[-2rem]   rounded-[100%] border-slate-500 border-[1rem] object-cover max-[750px]:h-[20rem] max-[750px]:w-[20rem] h-[26rem]  w-[26rem]' src={meals.strMealThumb} alt=""/>
   
    </div>
     <div>
    <div className='pb-[1rem]'>
    <h1 className='tracking-wide font-semibold text-lg' >Type : {meals.strCategory} </h1>
    </div>

    <div className='pb-[1rem]'>
    <h1 className='tracking-wide font-medium text-lg' >Country : {meals.strArea} </h1>
    </div>
    {show}
    </div>
    
   </div>
       
        
           
            
        
      
    </section>
    
  )
}

export default Detail