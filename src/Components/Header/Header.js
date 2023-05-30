import React from 'react'
import './header.css'
import RTA from './RTA'
import ME from '../../Asserts/coder.jpg';
import HeaderSocial from './HeaderSocial';

const Header = () => {
  return (
    <header>
        <div className='container header_container'>
          <h3>Hello, Im</h3>
          <h1>IBRAHIM</h1>
          <h5 className='text-light'>(Full Stack Developer)</h5>
          <RTA />
          <HeaderSocial />
          <div className='me'>
            <img src={ME} alt='me' />
          </div>
            <a href="#contact" className='scroll_down'>Click here to contact!</a>
        </div>
    </header>
  )
}

export default Header