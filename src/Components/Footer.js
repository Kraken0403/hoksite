import React from 'react'
import './Footer.scss'

function Footer() {
    return (
        <div>
            <section id="footer">
        <div className="footer-main">
            <div className="container-fluid">
                <div className="footer-head">
                    <div className="row">
                        <div className="col-12">
                            <h1>Let's Connect <br />and build your Dream Project</h1>
                            <div className="dark-link__parent">
                                <span className="dash"></span>
                                <a href="/" className="dark-link">Start a Project</a>
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="footer-inner">
                    <div className="row">

                        <div className="col-12 col-md-2">
                            <div className="footer-title">
                                <p>Email us</p>
                            </div>
                            <div className="footer-content">
                                <p>studio@hok.com</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-2">
                            <div className="footer-title">
                                <p>Call Us on</p>
                            </div>
                            <div className="footer-content">
                                <p>+91-7358103456</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-2">
                            <div className="footer-title">
                                <p>or Drop by at</p>
                            </div>
                            <div className="footer-content">
                                <p>31, Mark Street Avenue, Satellite, Ahmedabad- 380015</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 last-col">
                            <div className="footer-title">
                                <p>Email us</p>
                            </div>
                            <div className="footer-content">
                                <p>studio@hok.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright">
                    <p>Made with heart by Logion Solutions, HOK - 2021 | Privacy Policy</p>
                </div>

            </div>
        </div>
    </section>
        </div>
    )
}

export default Footer
