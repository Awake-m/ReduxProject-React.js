import React from 'react'
import {NavLink, Route, Routes } from 'react-router-dom'
import "../Css/Home.css"




function Home() {
  return (
 <div className='body'>
    <div className='Header'>
       <div className='box1' >
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/Shop" activeClassName="">Shop</NavLink>
        <NavLink to="/Pages" activeClassName="">Pages</NavLink>
        <NavLink to="/Elements" activeClassName="">Elements</NavLink>
      </div>
      <div className='box1'>
             <h1>DEPOT</h1>
     </div>
      <div className='box1'>
           <h4>CART ($0)</h4>
           <h4>LOGIN</h4>
      </div>
    </div>
</div>
  )
}

export default Home
