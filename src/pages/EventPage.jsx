import React from 'react'
import Events from '../ComponantsOfPages/Events'
import Footer from '../ComponantsOfPages/Footer'
import { PagesPath } from '../ComponantsOfPages/MixComponet'
import { Navbar } from '../ComponantsOfPages/Navbar'

export default function EventPage() {
  return (
    <>
        <PagesPath pageName={"Events"}/>
        <Events/>
        <Footer/>
    </>
  )
}
