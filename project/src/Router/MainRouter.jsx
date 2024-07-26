import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Pages from '../Pages/Pages'
import Elements from '../Pages/Elements'



function MainRouter() {
  return (
    <div>
       <Routes>
           <Route path="/" element={<Home/>}>Home</Route>
           <Route path="/Shop" element={<Shop/>}>Shop</Route>
           <Route path="/Pages" element={<Pages/>}></Route>
           <Route path="/Elements" element={<Elements/>}></Route>
       </Routes>
    </div>
  )
}

export default MainRouter
