import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'

function Nav(props) {
  return (
    <nav>
      <a href='#' onClick={() => props.setActiveNav('#')} className={props.activeNav === '#' ? 'active':''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => props.setActiveNav('#about')} className={props.activeNav === '#about' ? 'active':''}><AiOutlineUser /></a>
      <a href='#experience' onClick={() => props.setActiveNav('#experience')} className={props.activeNav === '#experience' ? 'active':''}><BiBook /></a>
      <a href='#services' onClick={() => props.setActiveNav('#services')} className={props.activeNav === '#services' ? 'active':''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => props.setActiveNav('#contact')} className={props.activeNav === '#contact' ? 'active':''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav