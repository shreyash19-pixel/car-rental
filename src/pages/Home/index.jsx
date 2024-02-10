import React, { useContext } from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import Booking from '../../views/Booking'
import AppContext from '../../utils/AppContext'
import Steps from '../../views/Steps'
import Models from '../../views/Models'



const Home = () => {

 
  const {reserve} = useContext(AppContext)


  return (
    <div style = {{backgroundColor: reserve ?  "rgba(0, 0, 0, 0.5)" : ""}}>
        <Nav />
        <Hero />
        <Booking/>
        <Steps />
        <Models />
  </div>
   
  )
}

export default Home