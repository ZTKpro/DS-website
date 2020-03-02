import React from "react"
import './Contact.scss'



class Contact extends React.Component{

    render() {
        return(
            <section id="Contact" className="contact fadeIn">
                    <div className="contact__box">
                        <h2>Contact us</h2>
                        <form action="POST" data-netlify="true">                       
                            <label htmlFor="email">
                                <input id="email" placeholder="Email" className="contact__email" type="email" name="email"/>
                            </label>
                            <label htmlFor="firstname">
                                <input id="firstname" placeholder="First name" className="contact__firstname" type="text" name="tittle"/>
                            </label>
                            <label htmlFor="content" htmlFor="lastname">
                                <textarea id="content" type="text" className="contact__textarea"/>
                            </label>
                            <div data-netlify-recaptcha="true"></div>
                                <button type="submit" className="contact__btn g-btn"><p>Send</p></button>
                        </form>
                    </div>

            </section>
        )
    }

}

export default Contact;
