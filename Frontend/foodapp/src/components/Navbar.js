import React from 'react'
import { useState } from 'react'
import {Link,useLocation} from 'react-router-dom'
import Sidebar from './Sidebar';
import {faHome,faList,faCog} from "@fortawesome/free-solid-svg-icons"
const Navbar = () => {
    const location=useLocation();
    const [showSidebar,setShowSidebar]=useState(false);
    const links=[{
        name:"Home",
        path:"/",
        icon:faHome

    },
    {
        name:"Recipes",
        path:"/recipies",
        icon:faList
    },
    {
        name:"Chef",
        path:"/chef",
        icon:faList
    },
    {
        name:"Signup",
        path:"/signup",
        faCog
    }

]
function closesidebar(){
    setShowSidebar(false);
}

  return (
   <>
   <div className='navbar container'>
    <a href='#!'className='logo'>Ag<span>ar</span>wals</a>
    <div className='nav-links'>
        {links.map(link=>(
            <Link to={link.path}className={location.pathname===link.path?"active" :"sidebar-link"}  key={link.name}>{link.name}</Link>
        ))}
        {/* <a href='#!' >Home</a>
        <a href='#!'>Recipes</a>
        <a href='#!'>Chef</a>
        <a href='#!'>Signup</a> */}
    </div>
<div  onClick={()=>setShowSidebar(true)}className={showSidebar?"sidebar-btn active":"sidebar-btn"}>
    <div className='bar'></div>
    <div className='bar'></div>
    <div className='bar'></div>

</div>
   </div>
   {showSidebar && <Sidebar close={closesidebar}  links={links}/>}
 
   </>
  )
}

export default Navbar