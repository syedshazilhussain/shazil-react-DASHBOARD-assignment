import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Param from './param'

export default function RouteName() {
  return (
    <>
      <BrowserRouter>
        <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/param'>Param</Link>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='param' element={<Param />} />
          <Route path='param/:id' element={<Param />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
