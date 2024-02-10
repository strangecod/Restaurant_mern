import React from 'react'

export const ChefsCard = ({cheif}) => {
  return (
    <>
   <div className='chief-card'>
    <img src={cheif.img}/>
    <div className='chief-card-info'>
        <h3 className='cheif-card-name'>{cheif.name}</h3>
        <p className='chief-recipie-count'>Recipie: <b>{cheif.recipiesCount}</b></p>
        <p className='chief-cuisine'>Special About : <b>{cheif.cuisine}</b></p>

    </div>
    </div>
    
    </>
  )
}
