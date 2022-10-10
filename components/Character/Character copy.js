import React,{useEffect,useRef} from 'react';
import { CharAnim } from './Style';
const Character=()=>{ 
    const listElement = useRef(null);
    const showBox=(i,j,k)=>{
        const getOffset=( el ) => {
            let _x = 0;
            let _y = 0;
            let _z = 0;
            while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
                _x += el.offsetLeft - el.scrollLeft;
                _z += el.offsetLeft - el.scrollLeft;
                _y += el.offsetTop - el.scrollTop;
                el = el.offsetParent;
            }
            return { top: _y, left: _x };
        }
        var a = getOffset( document.getElementById(i) ).left; 
        if((a<0) && (a>-j)) {
            document.getElementById(k).classList.add("active");
        }
        else {
            document.getElementById(k).classList.remove("active")
        }
    }
    useEffect(()=>{   
                            // window.addEventListener("DOMMouseScroll", handleScroll);
                            // window.addEventListener("mousewheel", handleScroll);
                     
                            // function wheelDistance(e) {
                            //     if (!e) {
                            //         e = window.event;
                            //     }
                            //     var w = e.wheelDelta,
                            //         d = e.detail;
                            //     if (d) {
                            //         return -d / 3; 
                            //     }
                     
                                
                            //     return w / 120;
                            // }
                     
                            // function handleScroll(e) {
                            //     var delta = wheelDistance(e);
                            //     var time = 1000;
                            //     var distance = 10;
                     
                            //     // $('html, body').stop().animate({
                            //     //     scrollLeft: $(window).scrollLeft()
                            //     //               - (distance * delta)
                            //     // }, time);
                            // }
                            // 
            const element = document.querySelector("#hrScroll");
            var slider_img = document.querySelector('.slider-img');

            let staticTimeout;
            let idleTimeout;


            function setImg(){
                slider_img.setAttribute('src','/assets/images/walking-girl.gif');
                console.log("fl")
            }

            const idleState=() =>{
                slider_img.setAttribute('src','/assets/images/walking-girl-idle.gif');
            }
            
            function resetIdleTimer() {
                clearTimeout(idleTimeout);
                idleTimeout = setTimeout(idleState, 6000);
            }

            window.onload = resetIdleTimer;
            document.onmousemove = resetIdleTimer;

              function onWheelStop() {
                slider_img.setAttribute('src','/assets/images/girl-static.gif');
                resetIdleTimer();
              }
            // 
            
                let triggers = 0;
                document.addEventListener('wheel', (e) => {
                    e.preventDefault();

                    if (staticTimeout) {
                        clearTimeout(staticTimeout);
                    }
                    element.scrollLeft += e.deltaY;
                    var item = document.getElementById("character");
                    item.classList.remove("fwd");
                    item.classList.remove("bwd");
                    if(e.deltaY == 0){
                        slider_img.setAttribute('src','/assets/images/girl-static.gif'); 
                    }
                    if(slider_img.getAttribute('src')!='/assets/images/walking-girl.gif'){
                        
                        setImg();
                    }
                    e.wheelDelta > 0 ? item?.classList.add("bwd"): item?.classList.add("fwd");
                    showBox('digPos-1',350,'dialogue-1');
                    showBox('digPos-2',250,'dialogue-2');
                    showBox('digPos-3',450,'dialogue-3');
                    showBox('digPos-4',400,'dialogue-4');
                    showBox('digPos-5',350,'dialogue-5');
                    showBox('digPos-3-1',550,'dialogue-3-1');
                    showBox('digPos-3-2',350,'dialogue-3-2');
                    showBox('digPos-3-3',450,'dialogue-3-3');
                    showBox('digPos-4-1',350,'dialogue-4-1');
                    showBox('digPos-4-2',350,'dialogue-4-2');
                    showBox('digPos-4-3',350,'dialogue-4-3');
                    showBox('digPos-5-1',350,'dialogue-5-1');
                    showBox('digPos-5-2',350,'dialogue-5-2');
                    showBox('digPos-5-3',350,'dialogue-5-3');
                    showBox('digPos-6-1',350,'dialogue-6-1');
                    showBox('digPos-6-2',300,'dialogue-6-2');
                    showBox('digPos-6-3',350,'dialogue-6-3');
                    showBox('digPos-8-1',350,'dialogue-8-1');
                    showBox('digPos-8-2',300,'dialogue-8-2');
                    showBox('digPos-8-3',350,'dialogue-8-3');

                    staticTimeout = setTimeout(onWheelStop, 100);
                }, {passive:false});
                // .......................................
                document.addEventListener('touchstart', handleTouchStart, false);        
                document.addEventListener('touchmove', handleTouchMove, false);

                var xDown = null;                                                        
                var yDown = null;
                function getTouches(evt) {
                    return evt.touches ||             
                            evt.originalEvent.touches; 
                    }                                                     
                                                                                            
                    function handleTouchStart(evt) {
                        const firstTouch = getTouches(evt)[0];                                      
                        xDown = firstTouch.clientX;                                      
                        yDown = firstTouch.clientY;   
                        slider_img.setAttribute('src','/assets/images/girl-static.gif');                                   
                    };                                                
                                                                                        
                function handleTouchMove(evt) {
                    showBox('digPos-1',350,'dialogue-1');
                    showBox('digPos-2',250,'dialogue-2');
                    showBox('digPos-3',450,'dialogue-3');
                    showBox('digPos-4',400,'dialogue-4');
                    showBox('digPos-5',350,'dialogue-5');
                    showBox('digPos-3-1',550,'dialogue-3-1');
                    showBox('digPos-3-2',350,'dialogue-3-2');
                    showBox('digPos-3-3',450,'dialogue-3-3');
                    showBox('digPos-4-1',350,'dialogue-4-1');
                    showBox('digPos-4-2',350,'dialogue-4-2');
                    showBox('digPos-4-3',350,'dialogue-4-3');
                    showBox('digPos-5-1',350,'dialogue-5-1');
                    showBox('digPos-5-2',350,'dialogue-5-2');
                    showBox('digPos-5-3',350,'dialogue-5-3');
                    showBox('digPos-6-1',350,'dialogue-6-1');
                    showBox('digPos-6-2',300,'dialogue-6-2');
                    showBox('digPos-6-3',350,'dialogue-6-3');
                    showBox('digPos-8-1',350,'dialogue-8-1');
                    showBox('digPos-8-2',300,'dialogue-8-2');
                    showBox('digPos-8-3',350,'dialogue-8-3');
                    if ( ! xDown || ! yDown ) {
                         
                        return;
                    }

                    var xUp = evt.touches[0].clientX;                                    
                    var yUp = evt.touches[0].clientY;
                    console.log(xUp,"uuu")

                    var xDiff = xDown - xUp;
                    var yDiff = yDown - yUp;


                    var item = document.getElementById("character");
                    item.classList.remove("fwd");
                    item.classList.remove("bwd");
                    if(evt.xDiff == 0){
                        
                    }
                    if(slider_img.getAttribute('src')!='/assets/images/walking-girl.gif'){
                        
                        setImg();
                    }
                   // evt.xDiff > 0 ? item?.classList.add("bwd"): item?.classList.add("fwd");

                                                                                        
                    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                        if ( xDiff > 0 ) {
                            /* right swipe */
                            item?.classList.add("fwd");
                            console.log("right",xDown) 
                        } else {
                            /* left swipe */
                            console.log("left") 
                            item?.classList.add("bwd")
                        }                       
                    } else {
                        if ( yDiff > 0 ) {
                            /* down swipe */ 
                        } else { 
                            /* up swipe */
                        }                                                                 
                    }
                    /* reset values */
                    xDown = null;
                    yDown = null;                                             
                };
               

                
            // 
            // element.addEventListener('wheel', (e) => {
                      
            // });


    },[])
    return(

        <CharAnim className="char" id="character">
            <div className='container__character'>
                <img src='/assets/images/girl-static.gif' className="slider-img"/>
                <img src="/assets/images/walking-girl.gif" className='display-none'/>
                <img src="/assets/images/walking-girl-idle.gif" className='display-none'/>
            </div>
        </CharAnim>
    )

}


export default Character;