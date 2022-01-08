import React, { useEffect } from 'react'
import './ProjectGallery.scss'
import image1 from '../images/about-bg.jpg'
import Button from './Button'
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap/all'

function ProjectGallery() {

    const styledButton = {
        border: '1px solid white',
        color: 'white'
    }

    gsap.registerPlugin(ScrollTrigger);

    useEffect(()=>{


        var tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: '#ProjectGallery',
                start: 'top 400px'

            }
        }).from('#ProjectGallery .line-1 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04,
        }, 0).from('#ProjectGallery .line-2 span', {
            y: '-100px',
            opacity: 0,
            stagger: 0.04,
        }, 0).from('.project-inner .inner-item img', {
            y: '30px',
            opacity: 0,
            stagger: 0.1,
        }, "<0.5")
   
    })

    
    return (
        <div id="ProjectGallery">
        <div className="scroll scroll_top about__scroll scroll_animated" data-animated-one=""></div>
            <div className="container-fluid">
                <div className="project-wrapper">
                    <h3>
                        <div className="line line-1">
                            <span>V</span>
                            <span>i</span>
                            <span>s</span>
                            <span>u</span>
                            <span>a</span>
                            <span>l</span>
                            <span>i</span>
                            <span>z</span>
                            <span>e </span>
                            <span>t</span>
                            <span>h</span>
                            <span>e </span>
                            <span>B</span>
                            <span>e</span>
                            <span>s</span>
                            <span>t</span>
                        </div>
                        <div className="line line-2">
                            <span>o</span>
                            <span>f </span>
                            <span>o</span>
                            <span>u</span>
                            <span>r </span>
                            <span>W</span>
                            <span>o</span>
                            <span>r</span>
                            <span>k</span>
                        </div>
                    </h3>
                </div>

                <div className="container-img">
                    <div className="project-main-wrapper">
                        <div className="row">
                        
                            <div className="col-12 col-md-6">
                                <div className="project-inner">
                                    <div className="inner-item odd">
                                        <img className="first-img" src={image1} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 ">
                                <div className="project-inner">
                                    <div className="inner-item even">
                                        <img className="second-img" src={image1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="project-main-wrapper">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="project-inner">
                                    <div className="inner-item odd">
                                        <img className="third-img" src={image1} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 ">
                                <div className="project-inner">
                                    <div className="inner-item even">
                                        <img className="fourth-img" src={image1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="button-wrapper" >
                    <div className="dark-link__parent">
                        {/* <span className="dash"></span> */}
                        <a href="/" className="dark-link" style={styledButton}>Start a Project</a>
                    </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectGallery
