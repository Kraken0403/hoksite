import React from 'react'
import './About.scss'
import Header from '../../Components/Header'
import SmallWrapper from '../../Components/SmallWrapper'
import Footer from '../../Components/Footer'

function About() {
    return (
        <div>
            <Header color="#111" />
            <div id="about">
                <SmallWrapper/>

                <section className="about-carousel">
                    <div className="container-fluid">
                        <div className="about-carousel__inner">
                        
                        </div>

                        <div className="nav-btns">
                            <a href="/" className="arrow-btn">
                                <div className="prev-arrow__parent">
                                    <div className="prev-arrow"></div>
                                </div>
                                
                                <div className="prev">Prev</div>
                            </a>
                            
                            <a href="/" className="arrow-btn">
                                <span className="next">Next</span>
                                <div className="prev-arrow__parent">
                                    <div className="prev-arrow"></div>
                                </div>
                            </a>
                            
                        </div>
                    </div>
                </section>

                <section className="strengths">
                    <div className="about__bg">POWER</div>
                    <div className="small-wrapper">
                        <div className="strengths-head">
                            <h3>
                                Our Strengths
                            </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        </div>

                        <div className="strengths-main">
                            <div className="row">
                                <div className="col-12 col-md-6 col-xl-4 col-lg-4">
                                    <div className="card">
                                        <div className="card-head">
                                            <img src="https://yodezeen.com/wp-content/uploads/2017/11/home.svg" alt="" className="card__img"/>
                                            <div className="card-head__text">
                                                <p>1 </p>
                                                <p>Office to work from</p>
                                            </div>
                                        </div>
                
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever specimen book. It has survived not only five centuries
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-xl-4 col-lg-4">
                                    <div className="card">
                                        <div className="card-head">
                                            <img src="https://yodezeen.com/wp-content/uploads/2017/11/people-1.svg" alt="" className="card__img"/>
                                            <div className="card-head__text">
                                                <p>30 </p>
                                                <p>family members</p>
                                            </div>
                                        </div>
                
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever specimen book. It has survived not only five centuries
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-xl-4 col-lg-4">
                                    <div className="card">
                                        <div className="card-head">
                                            <img src="https://yodezeen.com/wp-content/uploads/2017/11/pencil-1.svg" alt="" className="card__img"/>
                                            <div className="card-head__text">
                                                <p>300+ </p>
                                                <p>Finished projects</p>
                                            </div>
                                        </div>
                
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever specimen book. It has survived not only five centuries
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6 col-xl-4 col-lg-4">
                                    <div className="card">
                                        <div className="card-head">
                                            <img src="https://yodezeen.com/wp-content/uploads/2017/11/home.svg" alt="" className="card__img"/>
                                            <div className="card-head__text">
                                                <p>1 </p>
                                                <p>Office to work from</p>
                                            </div>
                                        </div>
                
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever specimen book. It has survived not only five centuries
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-xl-4 col-lg-4">
                                    <div className="card">
                                        <div className="card-head">
                                            <img src="https://yodezeen.com/wp-content/uploads/2017/11/people-1.svg" alt="" className="card__img"/>
                                            <div className="card-head__text">
                                                <p>30 </p>
                                                <p>family members</p>
                                            </div>
                                        </div>
                
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever specimen book. It has survived not only five centuries
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6 col-xl-4 col-lg-4">
                                    <div className="card">
                                        <div className="card-head">
                                            <img src="https://yodezeen.com/wp-content/uploads/2017/11/pencil-1.svg" alt="" className="card__img"/>
                                            <div className="card-head__text">
                                                <p>300+ </p>
                                                <p>Finished projects</p>
                                            </div>
                                        </div>
                
                                        <div className="card-body">
                                            <p>
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever specimen book. It has survived not only five centuries
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default About
