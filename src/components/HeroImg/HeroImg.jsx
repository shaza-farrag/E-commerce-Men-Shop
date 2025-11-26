import React from 'react'
import './HeroImg.css';
import heroImage from '../../assets/creative-black-friday-composition-black-background-with-copy-space.jpg';

function HeroImg() {
  return (
   <>
     <div className='hero container-fluid position-relative d-flex flex-column justify-content-center align-items-center'>
        <div className='hero-text position-absolute text-white'>
            <h1 className='fw-light title '>Welcome to our store</h1>
            <p className='pt-2 fs-5 fw-normal w-50'>Discover a modern men’s collection built on quality, comfort, and timeless style. Every piece is crafted to elevate your daily look with a refined masculine touch.</p>
        </div>
        <img className='rounded' src={heroImage} alt="" />
     </div>
   </>
  )
}

export default HeroImg