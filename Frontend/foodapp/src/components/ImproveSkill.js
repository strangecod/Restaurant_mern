import React from 'react'
import {useNavigate} from 'react-router-dom'

const ImproveSkill = () => {
    const list=[
        "Learn New Skills",
        "Expirement with food",
        "Make traditional Dishes",
        "Make use of Good Spices",
        "Visit You Restaurant",
        "Try new Dishes"
    ]
    const navigate=useNavigate()
    function gotosignup(){
      navigate("/Signup")
    }
  return (
    <>
     <div className='section improve-skills'>
     <div className='col img'>
      <img src='/photos/7.jpeg'/>
      </div>
       <div className='col topography'>
<h1 className='title'>Learn Chefs Advice</h1>
{list.map((item,index)=>(
    <p className='skill-item'key={index}>{item}</p>
))}
<button onClick={gotosignup}className='btn'>SignUp Now</button>
       </div>
    
    </div>
    </>
  )
}

export default ImproveSkill