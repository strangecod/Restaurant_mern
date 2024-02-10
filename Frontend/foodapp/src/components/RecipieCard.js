import React from 'react'
const RecipieCard = ({item}) => {
  return (
    <>
    
 
    <div className='recipie-card'>
        <img src={item.image} />
       <div className='recipie-title'> {item.name}</div>
       <div className='recipie-desc'><p>{item.desc} </p></div>
       <div className='recipie-view'><p>View Recipie</p></div>
    </div>
    </>
  )
}

export default RecipieCard