import React, { useState } from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'
import {BsBookHalf} from 'react-icons/bs'
import { RiServiceFill, RiMessage3Fill } from 'react-icons/ri'
 
const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#')
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')}  className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}  className={activeNav === '#experience' ? 'active' : ''}><BsBookHalf/></a>
      <a href='#services' onClick={() => setActiveNav('#services')}  className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}  className={activeNav === '#contact' ? 'active' : ''}><RiMessage3Fill/></a> 

    </nav>
  )
}

export default Nav 