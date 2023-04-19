import React from 'react'
import logo from '../assets/mirai_lab_image.png'

const Header = () => {
    
  return (
    <div>
        <ul className='header'>
            <li className='header-logo'>
                <img src={logo} alt='logo' className='header-logo-image'/>
                <div className='header-logo-name'>MIRAI LABS</div>
            </li>
            <li>
                <div className='header-tagline'>Engineering the future, today</div>
            </li>
            <li className='header-cta_btn-box'>
                <div className='header-cta_btn'>Discuss your project</div>
            </li>
        </ul>
    </div>
  )
}

export default Header