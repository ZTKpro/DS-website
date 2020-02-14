import React from "react"
import './Reviews.scss'

import person from './img/piotr.png'

class Reviews extends React.Component{

    render() {
        return(
            <section className="reviews">
                    <img src={person} alt="avatar"></img>
                    <p>Damian świadczy usługi na bardzo wysokim poziomie, programowane przez niego strony są porządne, dokładne i według zaleceń klienta. Nasza współpraca (któraś już z kolei) przebiegła pomyślnie, przyjemnie i z zamierzonymi końcowymi rezultatami. Jeśli chcesz się naprawdę wyróżnić w internecie i dać o sobie znać mediom, nie szczędź grosza i skorzystaj z usług tej firmy a gwarantuje ci że będziesz usatysfakcjonowany !</p>
                    <div className="reviews__changer">
                      
                        <div className="reviews__changeritem g-btn">
                            <div className="reviews__changeractive"></div>
                        </div>
                        <div className="reviews__changeritem g-btn"></div>
                        <div className="reviews__changeritem g-btn"></div>
                        <div className="reviews__changeritem g-btn"></div>

                    </div>
            </section>
        )
    }

}

export default Reviews;
