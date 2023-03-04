import React from 'react'
import { NavLink } from 'react-router-dom'

const Dnav = () => {
  return (
    <div className=' w-[2rem] h-[10rem]'>
        <ul className=' flex flex-row p-[1rem]'>
            <li className=' list-none'>
                <NavLink to={'/Instructions'}>
                Instructions
                </NavLink>
            </li>
            <li className=' list-none'>
                <NavLink to={'/Ingerdients'}>
                Ingerdients
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Dnav