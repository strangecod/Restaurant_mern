import React from 'react'

const Customimage = ({imgSrc,pt}) => {
  return (
    <>
    <div className='custom-image' style={{paddingTop:pt}}>
        <img src={imgSrc} alt='' /></div>
    </>
  )
}

export default Customimage