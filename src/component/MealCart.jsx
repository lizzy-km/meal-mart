import React from 'react';
import {GiMeal} from 'react-icons/gi';
import { Link } from 'react-router-dom';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { useState } from 'react';
import './mealcart.css'

const MealCart = ({name,image,id}) => {
    const oh= <AiOutlineHeart className=' text-orange-600' />
    const [heart, setHeart]=useState(oh)
    
    const sh =<AiFillHeart className=' text-orange-600' />
    const love=()=>{
        setHeart(sh)
    }
  return (
    <div className=' rounded-t-md m-card relative'>
        <div className=' flex flex-row p-[.5rem] '>
            <Link  to={`/detail/${id}`}><img className=' rounded-[100%] border-4 border-slate-400 object-cover w-[2.4rem]' src={image} alt=""/></Link>
            
        <Link to={`/detail/${id}`}  className=' p-1 mt-[-0.5rem] text-base text-slate-200'>{name} </Link>
        </div>
        <div className=' text-slate-200 p-[.5rem]'>
            <p>Sea food</p>
        </div>
       <Link to={`/detail/${id}`} >
       <p className=' border-4 v-icon top-[80%] left-[43%] rounded-[100%] text-slate-200 items-center flex justify-center w-[3rem] h-[3rem] absolute bg-slate-400'>
        <GiMeal className=' text-[1.5rem] vic  text-slate-200' />
      </p>
        </Link> 
      <div>
      <img className='  m-img hover:blur-sm w-[25rem] object-cover' src={image} alt=""/>
      </div>
      
      <div onClick={love} className=' absolute hover:text-xl text-2xl w-[1.8rem] h-[1.8rem] rounded-[100%] flex justify-center items-center left-[45.7%] top-[98%] cursor-pointer bg-slate-300'>
        {heart}
      </div>
      
    </div>
  )
}

export default MealCart
