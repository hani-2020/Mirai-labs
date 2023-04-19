import React from 'react'
import soft_icon from '../assets/software_image.png'
import hard_icon from '../assets/hardware_image.png'
import maintain_icon from '../assets/maintanence_image.png'

const Services = () => {
  return (
    <div className='services'>
        <div className='services-heading'>Services</div>
        <ul className='services-list'>
        <li className='services-list-item-box'>
            <div className='services-list-item_icon'>
                <div className='services-list-item'>Software services</div>
                <div className='services-list-item-icon-box'><img src={soft_icon} className='services-list-item-icon'/></div>
            </div>
                <div className='services-list-item-desc'>
                Our team of experienced software developers and engineers can provide you with everything from custom 
                software development to integration and implementation services. Whether you need software for design and 
                analysis, data management and analysis, or process automation, we can help you find the right solution for 
                your business.
                </div>
            </li>
            <li className='services-list-item-box'>
            <div className='services-list-item_icon'>
                <div className='services-list-item'>Hardware services</div>
                <div className='services-list-item-icon-box'><img src={hard_icon} className='services-list-item-icon'/></div>
            </div>
                <div className='services-list-item-desc'>
                Our team of experienced engineers can provide you with everything from custom hardware development to
                prototyping and testing services. We can help you design and build everything from custom control systems to 
                specialized sensors and actuators.
                </div>
            </li>
            <li className='services-list-item-box'>
            <div className='services-list-item_icon'>
                <div className='services-list-item'>Maintanence services</div>
                <div className='services-list-item-icon-box'><img src={maintain_icon} className='services-list-item-icon'/></div>
            </div>
                <div className='services-list-item-desc'>
                Maintenance is essential to ensuring the longevity and reliability of your equipment and systems. Our team 
                can provide you with the maintenance and reliability engineering services you need to keep your operations 
                running smoothly.
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Services