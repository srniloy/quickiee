import React from 'react'
import { Navbar } from '../ComponantsOfPages/Navbar'
import { FrontSlider } from '../ComponantsOfPages/FrontSlider'
import FoodItems from '../ComponantsOfPages/FoodItems'
import Events from '../ComponantsOfPages/Events'
import About from '../ComponantsOfPages/About'
import Reservation from '../ComponantsOfPages/Reservation'
import Footer from '../ComponantsOfPages/Footer'

export const Home = () => {
    return ( 
        <>
        <FrontSlider/>
        <FoodItems/>
        <Events/>
        <About/>
        <Reservation/>
        <Footer/>
        </>
    )
}