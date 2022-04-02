import React from 'react'
import Footer from '../ComponantsOfPages/Footer';
import { PagesPath } from '../ComponantsOfPages/MixComponet';

export default function ContactPage() {
  window.scrollTo(0,0);
  return (
    <>
      <PagesPath pageName={"Contact"}/>
      <Footer/>
    </>
  )
}
