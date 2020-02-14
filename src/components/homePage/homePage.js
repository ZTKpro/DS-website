import React from "react"

import Header from './Header/Header.js'
import Services from './Services/Services.js'
import Offer from './Offer/Offer.js'
import Portfolio from './Portfolio/Portfolio.js'
import Reviews from './Reviews/Reviews.js'
import Contact from './Contact/Contact.js'


const homePage = () => (
  <div>
    <Header />
    <main>
      <Services />
      <Offer />
      <Portfolio />
      <Reviews/>
      <Contact/>
    </main>
  </div>
)

export default homePage;
