import React, {useState} from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

function Header(props) {

    const [isOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!isOpen);

    if(isOpen) {
        gsap.to('.mobile-list .main-list', {
            left: '0%'
        })
    }

    if(!isOpen) {
        gsap.to('.mobile-list .main-list', {
            left: '-100%'
        })
    }
    
    const styles = {
        color: `${(props) = props.color }`,
    }

    // const logoStyles = {
    //     color: `${(props) = props.colorlogo }`
    // }
    return (
        <div id="header">
            <div className="header__wrapper">
                <div className="container-fluid">
                    <div className="header__inner header__light">

                        <Link to="/">
                        <div className="main-logo">
                            {/* <img src={logo} style={logoStyles} alt="" /> */}
                            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                width="771.000000pt" height="426.000000pt" viewBox="0 0 771.000000 426.000000"
                                preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,426.000000) scale(0.100000,-0.100000)"
                            fill= "#000" stroke="none">
                            <path d="M3445 4078 c-130 -11 -338 -48 -390 -68 -11 -5 -63 -23 -115 -41
                            -248 -84 -499 -248 -712 -466 -214 -219 -391 -536 -459 -823 -7 -30 -17 -61
                            -22 -68 -8 -9 -102 -12 -436 -10 l-426 3 -5 705 -5 705 -312 3 -313 2 0 -1844
                            c0 -1672 1 -1844 16 -1850 9 -3 148 -6 309 -6 258 0 294 2 299 16 3 9 6 386 6
                            839 0 741 2 823 16 829 9 3 190 6 404 6 314 0 391 -3 402 -14 8 -7 20 -55 27
                            -107 32 -233 74 -373 177 -584 69 -143 102 -194 211 -330 223 -277 530 -503
                            818 -600 44 -15 89 -30 100 -35 49 -20 204 -53 333 -70 121 -16 446 -14 582 4
                            174 23 355 73 490 133 140 63 196 95 365 210 107 73 348 319 438 446 70 100
                            177 294 206 377 7 19 17 44 21 55 11 27 46 148 61 207 8 34 15 46 24 40 7 -4
                            127 -142 267 -307 140 -165 264 -311 275 -325 12 -14 61 -72 110 -130 48 -58
                            92 -110 98 -116 14 -15 85 -99 135 -159 51 -61 56 -66 199 -235 63 -74 119
                            -138 125 -142 6 -4 185 -8 399 -8 376 0 387 1 387 19 0 11 -4 23 -10 26 -9 5
                            -407 462 -719 824 -73 86 -150 174 -170 196 -20 23 -88 101 -152 175 -64 74
                            -227 263 -363 419 -136 156 -245 288 -244 292 3 7 305 333 658 709 355 379
                            795 849 892 953 31 34 57 68 58 75 0 9 -83 12 -384 12 l-384 0 -99 -107 c-55
                            -60 -126 -137 -158 -173 -33 -36 -78 -85 -101 -110 -22 -25 -68 -74 -100 -110
                            -32 -36 -82 -90 -110 -120 -28 -30 -105 -114 -170 -186 -66 -72 -186 -204
                            -269 -293 -82 -90 -158 -174 -168 -187 -25 -32 -45 -30 -53 4 -27 120 -125
                            342 -202 462 -185 284 -455 534 -727 673 -247 125 -462 183 -764 207 -150 11
                            -221 11 -366 -2z m316 -588 c339 -34 591 -151 819 -380 180 -181 300 -401 350
                            -640 6 -30 16 -70 21 -88 6 -17 11 -101 11 -185 1 -171 -14 -274 -62 -442 -20
                            -71 -30 -95 -70 -175 -112 -225 -295 -423 -511 -557 -69 -42 -256 -120 -324
                            -135 -234 -49 -477 -52 -665 -7 -62 15 -152 41 -170 49 -8 4 -58 28 -112 54
                            -283 135 -536 418 -639 716 -37 108 -63 226 -79 362 -19 163 9 379 75 568 87
                            247 266 490 467 633 72 52 253 147 279 147 8 0 19 4 25 8 9 9 81 28 194 52 45
                            10 147 21 266 29 12 0 68 -4 125 -9z"/>
                            </g>
                            </svg>
                        </div>
                        </Link>    
                        

                        <div className="desktop">
                            <div className="main-list">
                            
                                <span className="menu__link" ><NavLink to="/" style={styles}>Home</NavLink></span>
                                <span className="menu__link"><NavLink to="/about" style={styles}>About</NavLink></span>
                                {/* <span className="menu__link"><NavLink to="/inner" style={styles}>Inner Work</NavLink></span> */}
                                <span className="menu__link" > <NavLink to="/projects" style={styles}> Projects </NavLink> </span>
                                <span className="menu__link" ><NavLink to="/contacts" style={styles}>Contact Us</NavLink></span>
                                {/* <div className="close-icon">
                                    <CloseIcon onClick={toggle}/>
                                </div> */}
                            
                            </div>
                        </div>
                        
                        <div className="hamburger-icon" >
                            <MenuIcon className='ham-svg' onClick={toggle} style={{'fill': 'props.color', 'stroke': 'props.color'}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-list">
                <div className="main-list">
                    
                    <span className="menu__link" ><NavLink to="/">Home</NavLink></span>
                    <span className="menu__link"><NavLink to="/about" >About</NavLink></span>
                    {/* <span className="menu__link"><NavLink to="/inner" >Inner Work</NavLink></span> */}
                    <span className="menu__link" > <NavLink to="/projects"> Projects </NavLink> </span>
                    <span className="menu__link" ><NavLink to="/contacts">Contact Us</NavLink></span>
                    <div className="close-icon">
                        <CloseIcon onClick={toggle}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Header
