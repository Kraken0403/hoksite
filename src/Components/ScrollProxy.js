import React, {useEffect} from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Scrollbar from 'smooth-scrollbar';


function Layout() {
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

        const options = {
            damping: 0.07,
        }

        let bodyScrollBar = Scrollbar.init(document.body, options);

            ScrollTrigger.scrollerProxy("body", {
            scrollTop(value) {
                if (arguments.length) {
                bodyScrollBar.scrollTop = value;
                }
                return bodyScrollBar.scrollTop;
            }
            });

        bodyScrollBar.setPosition(0, 0);
        bodyScrollBar.track.xAxis.element.remove()
        bodyScrollBar.addListener(ScrollTrigger.update);

        var fixed = document.querySelector('.mobile-list .main-list');

        bodyScrollBar.addListener(function(status) {
        var offset = status.offset;

        fixed.style.top = offset.y + 'px';
      
        //fixed.style.left = offset.x + 'px';
    
         })
    
    }, [])

    
    
    return (
        <div>
            
        </div>
    )
}

export default Layout
