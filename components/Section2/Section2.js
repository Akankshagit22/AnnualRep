import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import { AcademicStyled } from './Style';
const imgLoader = ({ src, width, quality }) => {
    return `${src}?&q=${quality || 95}`
  }
function Section2({hide}) {
  const [showLess,setShowLess]=useState(true);
  const onShowMore=()=>{
    setShowLess(false);
  }
  const onShowLess=()=>{
    setShowLess(true);
  }
  useEffect(()=>{
    const playGif=(i,j)=>{
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
        if(a<0) {
          document.getElementById(j).play();
            
        }
        else {
            //document.getElementById(k).classList.remove("active")
        }
    }
    let playing=true;
    document.addEventListener('wheel', (e) => {
      //e.preventDefault();
      if(playing=false){
        playGif('student','student-video');
        playGif('graph','graph-video');
      }
      playing=true;
      
    })
    

   })
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
   
    
        <AcademicStyled className={hide?'section_story':'section_story section-show'} id="academic-excellence">
            <div className="students" id="student">
            <img  src="/assets/images/students.gif"  alt=""/>

            </div>
            <div className="graph" id="graph">
            <img  src="/assets/images/graph.gif"  alt=""/>

            </div>
            <div className="math" id="math">
            <img  src="/assets/images/math.gif"  alt=""/>

            </div>
            <div className="abacus">
            <img  src="/assets/images/abacus.gif"  alt=""/>

            </div>
            <div className="snake">
            <img  src="/assets/images/snake-eyes.gif"  alt=""/>

            </div>
            <div className="background">

                <img  src="/assets/images/academic-excellence-bg.jpg"  style={{ display: isLoaded ? "none" : "block" }} className="image thumb"/>
                <img className="image full"  src="/assets/images/academic-excellence-bg.webp"  onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }}/>

            </div>
            <div className="foreground">
                <Image loader={imgLoader} src='/assets/images/academic-excellence-fg.webp' layout='fill'
    objectFit='contain' alt=""/>
            </div>
            <a  href='https://www.raz-plus.com/' className='ext-link-1' target="_blank" rel="noreferrer">&nbsp;</a>
            <a  href='https://www.khanacademy.org/' className='ext-link-2' target="_blank" rel="noreferrer">&nbsp;</a>

            <div className="dig-1" id="digPos-4"></div>
            <div className="dialogue" id="dialogue-4">
                <p>
                    This is my classroom, which I really missed
                    when the schools were shut during lockdown.
                    But our school&lsquo;s quick shift to blended-learning
                    combining traditional-classroom learning with
                    digital methods, re-established that connect.
                    The digital tablets that Akanksha provided to
                    students and teachers enabled seamless
                    learning via synchronous platforms like Zoom
                    and asynchronous platforms like Whatsapp.
                </p>
            </div>
            <div className="dig-2" id="digPos-5"></div>
            <div className="dialogue" id="dialogue-5">
            {showLess?
              <div className='read-less'>
                <p>
                My school has always included innovative
                teaching methods: We had project-based
                learning and I particularly recollect a project
                wherein the motive was to teach us how
                research is done and how it is presented to a
                large audience. Each group was assigned a
                region and we had to explore its culture,
                livelihoods etc.</p>
                
                <div onClick={onShowMore} className="btn_read-more">
                <Image src="/assets/images/arrow.png" layout='fill'
    objectFit='contain' alt=""/>
              </div>
              </div>: <div className='read-more'>
                <p> Our group was assigned the
                north-east of India and it was fascinating to
                learn about the region. I remember preparing a
                lot of charts, data-visualisation diagrams and
                doing a lot of Google keyword research which
                otherwise would have been a boring activity if it
                was not taught through project-based learning. 
                </p>
                <div onClick={onShowLess} className="btn_read-less"><Image src="/assets/images/arrow.png" layout='fill'
    objectFit='contain' alt=""/></div>
       </div> 
              }
            </div>
            
        </AcademicStyled>
    
  )
}

export default Section2