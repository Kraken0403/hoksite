import React from 'react'
import './ProjectGallery.scss'
import image1 from '../images/about-bg.jpg'
import Button from './Button'

function ProjectGallery() {
    return (
        <div id="ProjectGallery">
            <div className="container-fluid">
                <div className="project-wrapper">
                    <h3>Visualize the best of Our Work</h3>
                </div>

                <div className="container-img">
                    <div className="project-main-wrapper">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="project-inner">
                                    <div className="inner-item odd">
                                        <img src={image1} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 ">
                                <div className="project-inner">
                                    <div className="inner-item even">
                                        <img src={image1} alt="" />
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
                                        <img src={image1} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6 ">
                                <div className="project-inner">
                                    <div className="inner-item even">
                                        <img src={image1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="button-wrapper">
                        <Button/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectGallery
