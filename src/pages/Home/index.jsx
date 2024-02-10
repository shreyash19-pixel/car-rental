import React, { useContext } from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import Booking from '../../views/Booking'
import AppContext from '../../utils/AppContext'
import Steps from '../../views/Steps'
import Models from '../../views/Models'
import Advertisement from '../../components/Advertisement'
import About from '../../views/About'
import Testimonial from '../../views/Testimonial'



const Home = () => {

 
  const {reserve} = useContext(AppContext)


  return (
    <div style = {{backgroundColor: reserve ?  "rgba(0, 0, 0, 0.5)" : ""}}>
        <Nav />
        <Hero />
        <Booking/>
        <Steps />
        <Models />
        <Advertisement />
        <About />
        <Testimonial />
  </div>
   
  )
}

export default Home