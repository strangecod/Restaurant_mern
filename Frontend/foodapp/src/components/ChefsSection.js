import React from 'react'
import { ChefsCard } from './ChefsCard'

const ChefsSection = () => {
    const chiefs=[
        {
            name:"Sanjeev Kapoor",
            img:"/photos/topchefs/1.jpeg",
            recipiesCount:"10",
            cuisine:"Desi Food"
        },
        {
            name:"Ajay Chopra",
            img:"/photos/topchefs/2.jpeg",
            recipiesCount:"10",
            cuisine:"Best Food"
        },
        {
            name:"Vikas Khanna",
            img:"/photos/topchefs/3.jpeg",
            recipiesCount:"10",
            cuisine:"Italian Food"
        },
        {
            name:"Garima Arora",
            img:"/photos/topchefs/4.jpeg",
            recipiesCount:"10",
            cuisine:"Desi Food"
        },
        {
            name:"Ranveer Brar",
            img:"/photos/topchefs/5.jpeg",
            recipiesCount:"30",
            cuisine:"Chat Masala"
        },
        {
            name:"Harpal Singh Sokhi",
            img:"/photos/topchefs/6.jpeg",
            recipiesCount:"20",
            cuisine:"Punjabi Food"
        }
    ]
  return (
    <>
    <div className='section cheifs'>
        <h1 className='title'> Our Top Chefs</h1>
        <div className='top-chefs-container'>
            {chiefs.map(chief=> <ChefsCard key={chief.name} cheif={chief}/>)}
            
           
        </div>
    </div>
    </>
  )
}

export default ChefsSection