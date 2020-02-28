import React from "react"

import Header from './Header/Header.js'
import Services from './Services/Services.js'
import Offer from './Offer/Offer.js'
import Portfolio from './Portfolio/Portfolio.js'
import Reviews from './Reviews/Reviews.js'
import Contact from './Contact/Contact.js'

const fadeIn = () =>{

  const fadeInItem = document.querySelectorAll(".fadeIn")

  for(let i = 0;i < fadeInItem.length;i++){
    if(fadeInItem[i].offsetTop - 600<= window.pageYOffset){
      fadeInItem[i].style.opacity = "1"

    }
    
  }

}

class homePage extends React.Component{

  render() {
    window.addEventListener("scroll",fadeIn)
      return(
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
  }

}

export default homePage;
