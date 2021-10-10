import React from 'react'
import './Header.scss'
import logo from '../images/path.png'
import { NavLink } from 'react-router-dom'


function Header(props) {
    
    const styles = {
        color: `${(props) = props.color }`
    }
    return (
        <div id="header">
            <div className="header__wrapper">
                <div className="container-fluid">
                    <div className="header__inner header__light">

                        <div className="main-logo">
                            <img src={logo} alt="" />
                        </div>

                        <div className="main-list">
                        
                            <span className="menu__link" ><NavLink to="/" style={styles}>Home</NavLink></span>
                            <span className="menu__link"><NavLink to="/about" style={styles}>About</NavLink></span>
                            <span className="menu__link"><NavLink to="/inner" style={styles}>Inner Work</NavLink></span>
                            <span className="menu__link" style={styles}>Careers </span>
                            <span className="menu__link" style={styles}>Contact Us</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
