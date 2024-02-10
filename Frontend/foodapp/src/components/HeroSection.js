import React from 'react'
import Customimage from './Customimage'


const HeroSection = () => {
    const images=[
        "/photos/1.jpeg",
        "/photos/2.jpeg",
        "/photos/3.jpeg",
        "/photos/4.jpeg",
        "/photos/5.jpeg",
        "/photos/6.jpeg",
        "/photos/7.jpeg",
        "/photos/8.jpeg",
        "/photos/9.jpeg"
    ]
  return (
    <>
    <div className='section hero'>
       <div className='col topography'>
<h1 className='title'>What Are We About</h1>
<p className='info'>We are more than just a restaurant; we are a culinary destination that invites you to embark on a delightful journey of flavors and experiences. Our establishment is not just a place to eat; it's a haven for food enthusiasts seeking a remarkable dining adventure.</p>
<a href="https://www.youtube.com/results?search_query=master+chef" className='btn'>Explore Now</a>
       </div>
       <div className='col gallery'>
        {images.map((src,index)=>(
         <Customimage key={index} imgSrc={src} pt={"70%"}/>    
        ))}
       </div>
    </div>
    </>
  )
}

export default HeroSection