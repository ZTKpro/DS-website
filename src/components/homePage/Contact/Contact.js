import React from "react"
import './Contact.scss'



class Contact extends React.Component{

    render() {
        return(
            <section id="Contact" className="contact fadeIn">
                    <div className="contact__box">

                        <h2>Contact us</h2>


                        <form
    name="contact-da"
    method="post"
    action="/success"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="bot-field" />
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input type="text" name="email" id="email" />
    </div>
    <div>
      <label htmlFor="message">Message</label>
      <textarea name="message" id="message" rows="6" required />
    </div>
    <div>
      <input type="submit" value="Drop a line" />
      <input type="reset" value="Eraser" />
    </div>
  </form>

                        {/* <form name="contact-1" method="POST" data-netlify="true">          

                            <label htmlFor="email">
                                <input id="email" placeholder="Email" className="contact__email" type="email" name="email"/>
                            </label>

                            <label htmlFor="firstname">
                                <input id="firstname" placeholder="First name" className="contact__firstname" type="text" name="name"/>
                            </label>

                            <label htmlFor="content" htmlFor="lastname">
                                <textarea id="content" type="text" className="contact__textarea"/>
                            </label>

                            <div data-netlify-recaptcha="true"></div>

                            <button type="submit" className="contact__btn g-btn"><p>Send</p></button>

                        </form> */}

                    </div>

            </section>
        )
    }

}

export default Contact;
