import React from 'react'
import './Homehero.scss'

function Homehero() {
    
    return (
        <div>
            <div id="hero">
                <div className="inner-hero">
                    <div className="video-container">
                        <video className="video" autoPlay loop>
                             <source src="https://www.alterego-group.com/video/CROATIA_main_desc.mp4"></source>
                        </video>
                    </div>

                    <div className="hero-content">
                        <div className="main-head">
                            <h1>Hey whatsup hello</h1>
                        </div>
                    </div>

                    <div className="hero-footer">
                        <p>Insta</p>
                        <p>Facebook</p>
                    </div>

                    
                </div>
            </div>
        </div>
    )

    
}

export default Homehero
