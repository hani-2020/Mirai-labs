import React from 'react'
import michael from '../assets/michael-image.jpg'
import john from '../assets/john-image.jpg'
import james from '../assets/james-image.jpg'

const Team = () => {
  return (
    <div className='team'>
        <div className='team-heading'>Team</div>
        <div className='team-details-box'>
        <div className='team-image-box'><img src={michael}  className='team-image'/></div>
        <div className='team-desc'>
            <div className='team-desc-name'>Michael Nguyen, Software Developer</div>
            <div className='team-desc-content'>
                Michael is a software developer with experience in developing 
                software solutions for engineering projects. He is proficient in a range of programming languages 
                and can help you find the right software solution for your needs.
            </div>
        </div>
        <div className='team-details'>
            <div className='team-details-email'>Email: michaelnguyen@mirailabs.com</div>
            <div className='team-details-phone'>Phone: +1-202-555-0186</div>
        </div>
        </div>
        <div className='team-details-box'>
        <div className='team-image-box'><img src={james}  className='team-image'/></div>
        <div className='team-desc'>
            <div className='team-desc-name'>James Lee, Senior Electrical Engineer</div>
            <div className='team-desc-content'>
            James is a senior electrical engineer with over 15 years of experience in designing electrical 
            systems. He has a proven track record of delivering innovative and effective 
            solutions that meet the unique needs of his clients.
            </div>
        </div>
        <div className='team-details'>
            <div className='team-details-email'>Email: jameslee@mirailabs.com</div>
            <div className='team-details-phone'>Phone: +1-202-555-0144</div>
        </div>
        </div>
        <div className='team-details-box'>
        <div className='team-image-box'><img src={john}  className='team-image'/></div>
        <div className='team-desc'>
            <div className='team-desc-name'>John Smith, Lead Mechanical Engineer</div>
            <div className='team-desc-content'>
            John is a licensed mechanical engineer with over 20 years of experience in designing and analyzing complex 
            mechanical systems. He specializes in optimizing systems for maximum efficiency and reliability.
            </div>
        </div>
        <div className='team-details'>
            <div className='team-details-email'>Email: johnsmith@mirailabs.com</div>
            <div className='team-details-phone'>Phone: +1-202-555-0177</div>
        </div>
        </div>
    </div>
  )
}

export default Team