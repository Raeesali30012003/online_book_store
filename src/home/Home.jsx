import React from 'react'
import Navbar from "../components/Navbar";
import Baner from "../components/Baner";
import Freebook from '../components/Freebook';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Baner/>
    <Countdown/>
    <Freebook/>
    <Footer/>
    </>
  )
}

export default Home;
