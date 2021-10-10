import React from 'react'
import Header from '../../Components/Header'
import SmallWrapper from '../../Components/SmallWrapper'
import './InnerWork.scss'
import sample from '../../images/sample-1.jpg'
import sample2 from '../../images/sample-2.jpg'
import sample3 from '../../images/sample-3.jpg'
import $ from 'jquery';
import Footer from '../../Components/Footer'

function InnerWork() {

    React.useEffect(()=>{
        $("#slider").on("input change", (e)=>{
            const sliderPos = e.target.value;
            // Update the width of the foreground image
            $('.foreground-img').css('width', `${sliderPos}%`)
            // Update the position of the slider button
            $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
        });
    })
    return (
        <div id="inner-work1">
            <Header color = "#fff"/>
            <div id='hero-work'>
            
                <div className='layer-3 layer parallax' data-depth='0.50'></div>
            
                <div className="hero-wrapper">
                    <h1>Beyond the <br />universe</h1>
                    <span className="anime-line"></span>
                </div>
           
           </div>  

            <div className="inner-work__brief">
                <SmallWrapper/>
            </div>

            <div className="main-briefing">
            {/* <div className="about__bg">
                ISCON
            </div> */}
            <div className="briefing-inner">
                <img src={sample} alt="" />
            </div>

            <div className="container padding-briefing">
                <div className="small-wrapper">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3 className="brief-title">The Main <br />Content</h3>
                        </div>
                        <div className="col-12 col-md-6">
                            <p className="brief-content">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        {/* Blueprints */}
            
        <div className="blueprints-main">
            <div className="container">
                <div className="blueprints">
                    <div className='img background-img'></div>
                    <div className='img foreground-img'></div>
                    <input type="range" min="1" max="100" value="50" className="slider" name='slider' id="slider" />
                    <div className='slider-button'></div>
                </div>
            </div>
         </div>

         <section class="gallery">
            <div class="container-fluid">
                <div class="gallery-inner">
                    <div class="gallery-head">
                        <h1>JP ISCON</h1>
                    </div>

                    <div class="gallery-body">
                        <div class="column-left">
                            <div class="preview-img one-wrapper">
                                <img class="one-img" src={sample2} alt="" />
                            </div>

                            <div class="preview-img two-wrapper">
                                <img class="two-img" src={sample3} alt="" />
                            </div>

                            <div class="preview-img three-wrapper">
                                <img class="three-img" src={sample2} alt="" />
                            </div>

                            <div class="preview-img four-wrapper">
                                <img class="four-img" src={sample3} alt="" />
                            </div>
                        </div>

                        <div class="column-right offset-md-2">
                            <div class="preview-img five-wrapper">
                                <img class="five-img" src={sample2} alt="" />
                            </div>

                            <div class="preview-img six-wrapper">
                                <img class="six-img" src={sample2} alt="" />
                            </div>

                            <div class="preview-img seven-wrapper">
                                <img class="seven-img" src={sample3} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        

        <Footer/>

        </div>


    )
}

export default InnerWork
