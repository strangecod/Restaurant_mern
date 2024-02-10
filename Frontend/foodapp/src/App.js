import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Chef from './Pages/Chef'
import FooterSection from './components/FooterSection'
import Recipiesss from './Pages/Recipiesss'
import Signup from './Pages/Signup'

const App = () => {
  return (
   <>
   <Router>
  
   <Navbar/>
   <div className='container main'>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/recipies' element={<Recipiesss/>} />
      <Route path='/chef' element={<Chef/>} />
      <Route path='/signup' element={<Signup/>} />

     </Routes>
   </div>
   <FooterSection/>
   </Router>


   </>
  )
}

export default App