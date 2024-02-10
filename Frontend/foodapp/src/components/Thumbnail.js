import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'



const Thumbnail = () => {
    const [count,setCount]=useState(0);
    const handleclick=()=>{
        setCount(count+1);
    }
  return (
    <>
    <div className='Press'>
        <h2>Do Press Heart To Show your presence and contibute to my Mern Project with one click</h2>
    </div>
    <div className='heart' onClick={handleclick}>
    <FontAwesomeIcon icon={faHeart} color='red'   />
    {count}
    </div>
    </>
  )
}

export default Thumbnail