import React from 'react'
import About from '../ComponantsOfPages/About'
import Footer from '../ComponantsOfPages/Footer'
import { PagesPath } from '../ComponantsOfPages/MixComponet'
import { Navbar } from '../ComponantsOfPages/Navbar'

export default function AboutPage() {
  return (
    <>
        <PagesPath pageName={"About"}/>
        <About/>
        <Footer/>
    </>
  )
}
