import React from 'react'
import './Button.scss'

function Button() {
    return (
        <div className="main-btn">
            <div className="dark-link__parent">
                <span className="dash"></span>
                <a href="/" className="dark-link">Start a Project</a>
            </div>
        </div>
    )
}

export default Button
