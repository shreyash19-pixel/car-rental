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
import FAQ from '../../views/FAQ'
import Mobile from '../../views/Mobile'
import Footer from '../../components/Footer'



const Home = () => {

 
  const {reserve} = useContext(AppContext)


  return (
    <div style = {{position : "relative",  backgroundColor: reserve ?  "rgba(0, 0, 0, 0.5)" : "", margin : "0 auto", maxWidth : "1350px"}}>
        
        <Nav />
        <Hero />
        <Booking/>
        <Steps />
        <Models />
        <Advertisement />
        <About />
        <Testimonial />
        <FAQ />
        <Mobile />
        <Footer />
  </div>
   
  )
}

export default Home