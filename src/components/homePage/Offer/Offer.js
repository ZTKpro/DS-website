import React from "react"
import './Offer.scss'


import website from './img/website.png'
import CMS from './img/CMS.png'
import rwd from './img/rwd.png'
import hosting from './img/hosting.png'
import email from './img/email.png'
import ssl from './img/ssl.png'
import wrench from './img/wrench.png'
import designer from './img/designer.png'
import customer from './img/customer.png'
import fb from './img/fb.png'
import card from './img/card.png'


class Offer extends React.Component{

    render() {
        return(
            <div className="offer">

                    <div className="g-container offer__containers">


                        <div className="offer__item">
                            <h4>Basic</h4>
                            <p className="offer__price">€ 300</p> 
                            <p className="offer__description">The basic website package that works best when you 
                                need a simple and elegant business card of your
                                 company.</p>
                            <ul className="offer__ul">
                                <li className="offer__li">
                                    <img src={website} alt="shield icon"></img>
                                    <p>Professional website</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={CMS} alt="cms icon"></img>
                                    <p>System CMS</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={rwd} alt="computer icon"></img>
                                    <p>RWD</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={hosting} alt="piggybank"></img>
                                    <p>Free hosting 1 years</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={ssl} alt="padlock"></img>
                                    <p>SSL certificate</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={email} alt="mailbox icon"></img>
                                    <p>Mailbox</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={customer} alt="wrench icon"></img>
                                    <p>Support for 3 months</p>
                                </li>    
                            </ul>   
                        </div>
                        
                    
                        <div className="offer__item">
                            <h4>Business</h4>
                            <p className="offer__price">€ 700</p> 
                            <p className="offer__description">You need a professional website
                             that will bring you profits.This package is  for you</p>
                            <ul className="offer__ul">
                                <li className="offer__li">
                                    <img src={website} alt="shield icon"></img>
                                    <p>Professional website</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={CMS} alt="cms icon"></img>
                                    <p>System CMS</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={rwd} alt="computer icon"></img>
                                    <p>RWD</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={hosting} alt="piggybank"></img>
                                    <p>Free hosting 1 years</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={ssl} alt="padlock"></img>
                                    <p>SSL certificate</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={email} alt="mailbox icon"></img>
                                    <p>Mailbox</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={wrench} alt="wrench icon"></img>
                                    <p>Support for 3 months</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={designer} alt="designer icon"></img>
                                    <p>Created by our best graphic designer.</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={customer} alt="wrench icon"></img>
                                    <p>In 100% tailored to customer</p>
                                </li>    
                            </ul>   
                        </div>


                        <div className="offer__item">
                            <h4>Master</h4>
                            <p className="offer__price">€ 1400</p> 
                            <p className="offer__description">Do you need comprehensive help 
                            in promoting your business on the Internet? 
                            This package is for you</p>
                            <ul className="offer__ul">
                                <li className="offer__li">
                                    <img src={website} alt="shield icon"></img>
                                    <p>Professional website</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={CMS} alt="cms icon"></img>
                                    <p>System CMS</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={rwd} alt="computer icon"></img>
                                    <p>RWD</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={hosting} alt="piggybank"></img>
                                    <p>Free hosting 1 years</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={ssl} alt="padlock"></img>
                                    <p>SSL certificate</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={email} alt="mailbox icon"></img>
                                    <p>Mailbox</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={wrench} alt="wrench icon"></img>
                                    <p>Support for 3 months</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={designer} alt="designer icon"></img>
                                    <p>Created by our best graphic designer.</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={customer} alt="wrench icon"></img>
                                    <p>In 100% tailored to customer</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={fb} alt="facebook icon"></img>
                                    <p>Boosting fanpage on facebook</p>
                                </li>    
                                <li className="offer__li">
                                    <img src={card} alt="card icon"></img>
                                    <p>Professional  
Logo , Banner ad and business card </p>
                                </li>    
                            </ul>   
                        </div>

                    </div>

            </div>
        )
    }

}

export default Offer;
