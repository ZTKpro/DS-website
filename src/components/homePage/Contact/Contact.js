import React from "react"
import './Contact.scss'



class Contact extends React.Component{

    render() {
        return(
            <section id="Contact" className="contact fadeIn">
                    <div className="contact__box">

                        <h2>Contact us</h2>


                        <form name="contact-netlify" method="POST" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
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
