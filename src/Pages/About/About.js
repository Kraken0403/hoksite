import React from 'react'
import './About.scss'
import SmallWrapper from '../../Components/SmallWrapper'
import Footer from '../../Components/Footer'
import sample from '../../images/about-bg-2.jpg';
import sample2 from '../../images/about-bg.jpg';
import ScrollProxy from '../../Components/ScrollProxy'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Header from '../../Components/Header';
import { AboutContent } from '../../Components/Data';


function About() {

    
// const getConfigurableProps = () => ({
//     showArrows: boolean('showArrows', true, tooglesGroupId),
//     showStatus: boolean('showStatus', true, tooglesGroupId),
//     showIndicators: boolean('showIndicators', true, tooglesGroupId),
//     infiniteLoop: boolean('infiniteLoop', true, tooglesGroupId),
//     showThumbs: boolean('showThumbs', true, tooglesGroupId),
//     useKeyboardArrows: boolean('useKeyboardArrows', true, tooglesGroupId),
//     autoPlay: boolean('autoPlay', true, tooglesGroupId),
//     stopOnHover: boolean('stopOnHover', true, tooglesGroupId),
//     swipeable: boolean('swipeable', true, tooglesGroupId),
//     dynamicHeight: boolean('dynamicHeight', true, tooglesGroupId),
//     emulateTouch: boolean('emulateTouch', true, tooglesGroupId),
//     autoFocus: boolean('autoFocus', false, tooglesGroupId),
//     thumbWidth: number('thumbWidth', 100, {}, valuesGroupId),
//     selectedItem: number('selectedItem', 0, {}, valuesGroupId),
//     interval: number('interval', 2000, {}, valuesGroupId),
//     transitionTime: number('transitionTime', 500, {}, valuesGroupId),
//     swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, valuesGroupId),
//     ariaLabel: text('ariaLabel', undefined),
// });


    return (
        
        <div id="about-head">
        <ScrollProxy/>
            <Header color="#111" colorlogo="#111" />
            {/* <div id="header">
                <div className="header__wrapper">
                    <div className="container-fluid">
                        <div className="header__inner header__light">

                            <div className="main-logo">
                                <img src={newLogo}  alt="" />
                            </div>

                            <div className="main-list">
                            
                                <span className="menu__link" ><NavLink to="/" >Home</NavLink></span>
                                <span className="menu__link"><NavLink to="/about">About</NavLink></span>
                                <span className="menu__link"><NavLink to="/inner" >Inner Work</NavLink></span>
                                <span className="menu__link" > <NavLink to="/projects" > Projects </NavLink> </span>
                                <span className="menu__link" ><NavLink to="/contacts" >Contact Us</NavLink></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div id="about">
                <SmallWrapper para1={AboutContent.paraOne} para2={AboutContent.paraTwo} line1={AboutContent.line1} line2={AboutContent.line2}/>

                <section className="about-carousel">
                    <div className="container-fluid">
                        <div className="about-carousel__inner">
                            <Carousel showArrows={false} dynamicHeight={true} swipeable={true} emulateTouch={true} showIndicators={false} autoPlay={false}>
                                <div className="">
                                    <img src={sample} alt="" />
                                </div>

                                <div className="">
                                    <img src={sample2} alt="" />
                                </div>
                            </Carousel>
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
                                <div className="col-12 col-md-4 col-xl-4 col-lg-4">
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

                                <div className="col-12 col-md-4 col-xl-4 col-lg-4">
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

                                <div className="col-12 col-md-4 col-xl-4 col-lg-4">
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
                                <div className="col-12 col-md-4 col-xl-4 col-lg-4">
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

                                <div className="col-12 col-md-4 col-xl-4 col-lg-4">
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

                                <div className="col-12 col-md-4 col-xl-4 col-lg-4">
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
