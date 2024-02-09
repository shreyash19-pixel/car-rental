import React, { useContext } from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import Booking from '../../views/Booking'
import AppContext from '../../utils/AppContext'

const Home = () => {

  const {reserve} = useContext(AppContext)

  return (
    <div style = {{backgroundColor: reserve ?  "rgba(0, 0, 0, 0.5)" : ""}}>
    <Nav />
    <Hero />
    <Booking/>
  </div>

  )
}

export default Home