import React from 'react'
import FoodItems from '../ComponantsOfPages/FoodItems'
import Footer from '../ComponantsOfPages/Footer'
import { PagesPath } from '../ComponantsOfPages/MixComponet'
import { Navbar } from '../ComponantsOfPages/Navbar'

export default function FoodItemsPage() {
  window.scrollTo(0,0);
  return (
    <>
        <PagesPath pageName={"Food Items"}/>
        <FoodItems/>
        <Footer/>
    </>
  )
}
