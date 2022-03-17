import React from 'react'
import Footer from '../ComponantsOfPages/Footer'
import { PagesPath } from '../ComponantsOfPages/MixComponet'
import { Navbar } from '../ComponantsOfPages/Navbar'
import Reservation from '../ComponantsOfPages/Reservation'

export default function ReservationPage() {
  return (
    <>
        <PagesPath pageName={"Reservation"}/>
        <Reservation/>
        <Footer/>
    </>
  )
}
