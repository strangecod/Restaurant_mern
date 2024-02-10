import React, { useEffect, useState } from 'react'
import RecipieCard from '../components/RecipieCard'
const Chef = () => {
  const data=[
    {
        name:"Sanjeev Kapoor",
        image:"/photos/topchefs/1.jpeg",
        desc:"Sanjeev Kapoor is a renowned Indian chef and television personality, known for his innovative approach to Indian cuisine and popularizing cooking shows in India."
    },
    {
        name:"Ajay Chopra",
        image:"/photos/topchefs/2.jpeg",
        desc:"Ajay Chopra is an accomplished chef known for his expertise in Indian cuisine and his appearances on television cooking shows. With a passion for blending traditional flavors with modern techniques."
    },
    {
        name:"Vikas Khanna",
        image:"/photos/topchefs/3.jpeg",
        desc:" Vikar Khanna is a passionate environmentalist dedicated to sustainable development and wildlife conservation. With a background in ecology and activism."
    },
    {
        name:"Garima Arora",
        image:"/photos/topchefs/4.jpeg",
        desc:"Garima Arora is an acclaimed Indian chef known for her innovative approach to Indian cuisine, blending traditional flavors with contemporary techniques. She made history as the first Indian woman."
    },
    {
        name:"Ranveer Brar",
        image:"/photos/topchefs/5.jpeg",
        desc:"Ranveer Brar is a renowned Indian chef and television personality known for his innovative culinary creations and engaging presence on cooking shows. With a unique blend of traditional."
    },
    {
        name:"Harpal Singh Sokhi",
        image:"/photos/topchefs/6.jpeg",
        desc:"Harpal Singh Sokhi is an Indian celebrity chef known for his vibrant personality and expertise in Punjabi cuisine, gaining popularity through television shows like Turban Tadka. "
    }
    
  ]
        

  return (
    <>
    <h1 style={{color:"red"}}>Your Favourite Chefs</h1>
    <div className='recipes-container'>
 {data.map((item)=>(
    <RecipieCard item={item}/>
 ))}
        </div>
    </>
  )
}

export default Chef