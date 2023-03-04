import React from 'react'
import {GiHotMeal} from 'react-icons/gi'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className=' fixed w-screen z-50 flex justify-between shadow-lg p-[1.3rem] bg-slate-700'>
        <NavLink to={'/'}>
           <GiHotMeal className=' mt-[-0.4rem] text-white text-3xl'/>
        </NavLink>
        <div>
            <div>
            <input className=' rounded-md bg-slate-200' type="text" name=""/>
            </div>
        </div>
    </div>
  )
}

export default Navbar