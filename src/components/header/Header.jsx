import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = (props) => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello I'm</h5>
        <h1>Rokas Bendikas</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA activeNav={props.activeNav} setActiveNav={props.setActiveNav}/>
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' onClick={() => props.setActiveNav('#contact')} className='scroll__down'>Scroll Down</a>

        
      </div>
    </header>
  )
}

export default Header