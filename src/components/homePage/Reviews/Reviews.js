import React from "react"
import './Reviews.scss'

import person0 from './img/person0.png'
import person1 from './img/person1.jpg'
import person2 from './img/person2.jpg'
import person3 from './img/person3.jpg'

const  personArray = [
    person0,
    person1,
    person2,
    person3
]

const opionionList = [
    "Damian świadczy usługi na bardzo wysokim poziomie, programowane przez niego strony są porządne, dokładne i według zaleceń klienta. Nasza współpraca (któraś już z kolei) przebiegła pomyślnie, przyjemnie i z zamierzonymi końcowymi rezultatami. Jeśli chcesz się naprawdę wyróżnić w internecie i dać o sobie znać mediom, nie szczędź grosza i skorzystaj z usług tej firmy a gwarantuje ci że będziesz usatysfakcjonowany !",
    "Nasza strona jest w końcu w rękach profesjonalistów! Świetny kontakt, doradztwo no i ludzie naprawdę znają się na rzeczy💪 Polecam!",
    "Solidny Web Design. Polecam!",
    "Szczerze polecam! Najwyższy poziom obsługi!"
]

let activeOpinion = 0  
let opionion = opionionList[0]

const changeOpinion = (e) =>{   
    const changer = document.querySelectorAll(".reviews__changeractive")
    const avatar = document.querySelector(".reviews__avatar")
    const opinionContent = document.querySelector("#opinionContent")
    
    function resetAnimation(){
        avatar.style.animation = ""
        opinionContent.style.animation = ""
    }
    resetAnimation()
    function addAnimation(){
        avatar.style.animation = "opacityChange 3s"
        opinionContent.style.animation = "opacityChange 3s"
    }
    setTimeout(addAnimation, 0.001);


    for(let i = 0;i < changer.length;i++ ){
        changer[i].style.opacity = ""
    }
    
    changer[e.target.id].style.opacity = "1"
    avatar.src = personArray[e.target.id]
    opinionContent.textContent = opionionList[e.target.id]

}


class Reviews extends React.Component{

    render() {
        return(
            <section className="reviews fadeIn">
                    <img className="reviews__avatar" src={person0} alt="avatar"></img>
                    <p id="opinionContent">{opionion}</p>
                    <div className="reviews__changer">
                      
                        <div onClick={changeOpinion} id="0" className="reviews__changeritem g-btn">
                            <div id="0" className="reviews__changeractive"></div>
                        </div>
                        <div onClick={changeOpinion} id="1" className="reviews__changeritem g-btn"><div id="1"  className="reviews__changeractive"></div></div>
                        <div onClick={changeOpinion} id="2" className="reviews__changeritem g-btn"><div  id="2" className="reviews__changeractive"></div></div>
                        <div onClick={changeOpinion} id="3" className="reviews__changeritem g-btn"><div  id="3" className="reviews__changeractive"></div></div>

                    </div>
            </section>
        )
    }

}

export default Reviews;
