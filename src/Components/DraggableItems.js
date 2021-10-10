import React from 'react'
import './DraggableItems.scss'

function DraggableItems() {

    React.useEffect(()=>{
        const slider = document.querySelector('.items');
        const sliderItems = document.querySelectorAll('.item')
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
        isDown = true;
        //   slider.classList.add('active');
        for(var i = 0; i < sliderItems.length; i++){
            sliderItems[i].classList.add('active')
        }
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        
        });

        slider.addEventListener('mouseleave', () => {
        isDown = false;
        //   slider.classList.remove('active');
        for(var i = 0; i < sliderItems.length; i++){
            sliderItems[i].classList.remove('active')
        }
        });

        slider.addEventListener('mouseup', () => {
        isDown = false;
        //   slider.classList.remove('active');
        for(var i = 0; i < sliderItems.length; i++){
            sliderItems[i].classList.remove('active')
        }
        });

        slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;  // stop the fn from running
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    
        });


        //   touchEvents

        slider.addEventListener('touchstart', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('touchend', () => {
        isDown = false;
        slider.classList.remove('active');
        });

        slider.addEventListener('touchcancel', () => {
        isDown = false;
        slider.classList.remove('active');
        });

        slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;  // stop the fn from running
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
        });
    }, [])
        
    
 
    
    return (
        
        
        <div>
            <section id="draggable">
                <div className="container-fluid">
                    <div className="about">
                        <div className="row">
                            <div className="col-12 col-md-7">

                            </div>
                            <div className="col-12 col-md-5">
                                <div className="about-main">
                                    <h3 className="about-head">We Are Lorem Ipsum is simply dummy text of the printing</h3>
                                    <p className="about-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider">
                        <div className="items">
                            <div className="item item1"></div>
                            <div className="item item2"></div>
                            <div className="item item3"></div>
                            <div className="item item4"></div>
                            <div className="item item5"></div>
                            <div className="item item6"></div>
                            <div className="item item7"></div>
                            <div className="item item7"></div>                
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
        
    )

   
}

export default DraggableItems
