import { useState } from 'react'
import Home from './Home'
import './App.css'
import Meal from './component/Meal'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Detail from './component/Detail'
import Ingerdients from './component/Ingerdients'
import Instructions from './component/Instructions'

function App() {
  

  return (
    <div className=" max-h-screen App">
     <Navbar />
     <Routes>
        <Route exact path='/' element={<Meal/>} />
        <Route exact path='/detail/:id' element={<Detail/>} />
        <Route exact path='/Ingerdients' element={<Ingerdients/>}/>
        <Route exact path='/Instructions' element={<Instructions/>}/>
     </Routes>
     
    </div>
  )
}

export default App
