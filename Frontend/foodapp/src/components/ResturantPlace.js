import React from 'react'
import Customimage from './Customimage'
const ResturantPlace = () => {
    const images=[
        "/photos/10.jpeg",
        "/photos/11.jpeg",
        "/photos/12.jpeg",
        "/photos/13.jpeg",
        "/photos/14.jpeg",
        "/photos/15.jpeg",
        
    ]
  return (
    <>
    <div className='section hero'>
       <div className='col topography'>
<h1 className='title'>About Our Restaurant</h1>
<p className='info'>Step into our restaurant, where culinary artistry meets exquisite design, creating a dining experience that transcends the ordinary. Our interior is a carefully curated space that reflects the essence of our culinary philosophy – a harmonious blend of sophistication, comfort, and aesthetic delight.</p>
<a href="https://www.tajhotels.com/?gad_source=1&gclid=EAIaIQobChMIs_qIv6qXhAMVLd0WBR1SvgrJEAAYASAAEgI3sfD_BwE" className='btn'>Explore Now</a>

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

export default ResturantPlace