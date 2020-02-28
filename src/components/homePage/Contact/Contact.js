import React from "react"
import './Contact.scss'



class Contact extends React.Component{

    render() {
        return(
            <section id="Contact" className="contact fadeIn">
                    <div className="contact__box">
                        <h2>Contact us</h2>
                        <form>                       
                            <label htmlFor="email">
                                <input id="email" placeholder="Email" className="contact__email" type="email"/>
                            </label>
                            <label htmlFor="firstname">
                                <input id="firstname" placeholder="First name" className="contact__firstname" type="text"/>
                            </label>
                            <label htmlFor="tittle">
                                <input id="tittle" placeholder="Tittle" className="contact__inputtittle" type="text"/>
                            </label>
                            <label htmlFor="content" htmlFor="lastname">
                                <textarea id="content" type="text" className="contact__textarea"/>
                            </label>
                                <button type="submit" className="contact__btn g-btn"><p>Send</p></button>
                        </form>
                    </div>

            </section>
        )
    }

}

export default Contact;
