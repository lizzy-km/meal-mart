import React from 'react'

const Ingerdients = ({item,idata}) => {
  return (
    <div className=' ml-[0rem] '>
      <div className=' tracking-wide   pb-[.5rem] flex justify-between w-[15rem] gap-[1rem]'>
        <p>{item.strIngredient1}</p>        <p>{item.strMeasure1}</p>
      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{item.strIngredient2}</p>        <p>{item.strMeasure2}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{item.strIngredient3}</p>        <p>{item.strMeasure3}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{item.strIngredient4}</p>        <p>{item.strMeasure4}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{item.strIngredient5}</p>        <p>{item.strMeasure5}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{item.strIngredient6}</p>        <p>{item.strMeasure6}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{item.strIngredient7}</p>        <p>{item.strMeasure7}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{item.strIngredient8}</p>        <p>{item.strMeasure8}</p>

      </div>
      <div className='flex  tracking-wide   pb-[.5rem] justify-between w-[15rem] gap-[1rem]'>
        <p>{item.strIngredient9}</p>        <p>{item.strMeasure9}</p>

      </div>
    </div>
  )
}

export default Ingerdients
