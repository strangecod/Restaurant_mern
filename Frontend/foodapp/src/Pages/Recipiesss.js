import React, { useEffect, useState } from 'react'
import RecipieCard from '../components/RecipieCard'
const Recipiesss = () => {
  const data=[
    {
        name:"Veg Burger",
        image:"/photos/1.jpeg",
        desc:"A succulent patty nestled between toasted buns, layered with fresh lettuce, juicy tomatoes, and creamy sauces—a quintessential symphony of flavors and textures."
    },
    {
        name:"Masala Dosa",
        image:"/photos/2.jpeg",
        desc:"Dosa is a traditional South Indian crepe made from fermented rice and lentil batter, typically served with coconut chutney and sambar.It is the best snack i had."
    },
    {
        name:"Idli Sambhar",
        image:"/photos/4.jpeg",
        desc:"Idli is a traditional South Indian steamed rice cake, made from fermented rice and lentil batter. It is Very tasty givng you the best taste of south indian dishes."
    },
    {
        name:"Gol Gappe",
        image:"/photos/3.jpeg",
        desc:"Golgappe, also known as pani puri, are crispy hollow spheres filled with spiced water, tangy chutneys, and savory fillings, offering a burst of flavor in every bite."
    },
    {
        name:"Kachori",
        image:"/photos/7.jpeg",
        desc:"Kachori is a popular Indian snack consisting of deep-fried pastry filled with a spicy mixture, usually made of lentils or potatoes. It is known for its crispy exterior."
    },
    {
        name:"Pizza",
        image:"/photos/8.jpeg",
        desc:"Pizza: A savory, customizable delight featuring a thin crust topped with tangy tomato sauce, gooey cheese, and an array of mouthwatering toppings, baked to perfection."
    },
    
  
 
    
  ]
        

  return (
    <>
    <h1 style={{color:"red"}}>All Favourite Dishes</h1>
    <div className='recipes-container'>
 {data.map((item)=>(
    <RecipieCard item={item}/>
 ))}
        </div>
    </>
  )
}

export default Recipiesss