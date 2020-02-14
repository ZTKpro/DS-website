import React from "react"
import './header.scss'

class Header extends React.Component{

    render() {
        return(
            <header className="header">
                <div className="g-container header__container">
                    <div className="header__textbox">
                        <p>Welcome to</p>
                        <h1>DS WEBSITE</h1>
                    </div>
                </div>
                <div className="header__circle header__circle--1"></div>
                <div className="header__circle header__circle--2">
                    <div className="header__circleinside"></div>
                </div>
                <div className="header__circle header__circle--3"></div>
                <div className="header__circle header__circle--4">  
                    <div className="header__circleinside"></div>
                </div>
            </header>
        )
    }

}

export default Header;
