import React,{useState} from 'react';
import Image from 'next/image';
import { SeelStyled } from './Style';
const imgLoader = ({ src, width, quality }) => {
    return `${src}?&q=${quality || 95}`
  }
function Section3({hide}) {
    const [showLess,setShowLess]=useState(true);
    const onShowMore=()=>{
      setShowLess(false);
    }
    const onShowLess=()=>{
      setShowLess(true);
    }
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    
        <SeelStyled className={hide?'section_story':'section_story section-show'} id="seel">
            <div className="background">

                <img  src="/assets/images/seel-bg.pg"  style={{ display: isLoaded ? "none" : "block" }} className="image thumb"/>
                <img className="image full"  src="/assets/images/seel-bg.webp"  onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }}/>

            </div>
            <div className="foreground">
              <Image loader={imgLoader} src='/assets/images/seel-fg.webp' layout='fill'
    objectFit='contain' alt=""/>
            </div>
            <div className="hands">
            <img  src="/assets/images/hands.gif"  alt=""/>

            </div>
            <div className="swings">
            <img  src="/assets/images/swing.gif"  alt=""/>

            </div>
           
            <div className="dig-1" id="digPos-3-1"></div>
            <div className="dialogue" id="dialogue-3-1">
                <p>
                During the pandemic, I observed that my
                friends from other schools and even their
                families faced a lot of trouble dealing with their
                emotions while it was much easier for me and
                my parents because my teachers used to
                regularly check-in on us and because of the
                conditioning from years of
                Socio-Emotional-Ethical Learning (SEEL)
                routines.
                </p>
            </div>
            <div className="dig-2" id="digPos-3-2"></div>
            <div className="dialogue" id="dialogue-3-2">
            {showLess?
              <div className='read-less'>
                <p>
                We had weekly circle-time conversations
                through which our teachers would infer the
                challenges we faced and then address those
                through one-on-one counselling.
                In these circle-times, students discussed
                topics concerning them such as bullying, child
                marriages, managing finances and time etc.</p>

                <div onClick={onShowMore} className="btn_read-more">
                <Image src="/assets/images/arrow.png" layout='fill'
    objectFit='contain' alt=""/>
              </div>
              </div>: <div className='read-more'>
                <p>
                We also had a 10-minute self-reflection session
                every morning wherein we would introspect by
                writing or drawing. This practice really helped
                us to increase our self-awareness, manage
                emotions, and practice values such as kindness,
                compassion and gratitude in our daily lives. 
                </p>
                <div onClick={onShowLess} className="btn_read-less"><Image src="/assets/images/arrow.png" layout='fill'
    objectFit='contain' alt=""/></div>
                              </div> 
              }
            </div>
            <div className="dig-3" id="digPos-3-3"></div>
            <div className="dialogue" id="dialogue-3-3">
            {showLess?
              <div className='read-less'>
                <p>
                One of the best things I learnt through SEEL
                sessions is to help the ones in need without
                expecting anything in return, and thus was born
                Project Sitara.<br/><br/>
                During my summer-holiday visits to my village, I
                observed that the education scene suffered
                from poor teacher-attendance, outdated
                pedagogy, poor infrastructure etc. 
                </p>
                <div onClick={onShowMore} className="btn_read-more">
                <Image src="/assets/images/arrow.png" layout='fill'
    objectFit='contain' alt=""/>
              </div>
              </div>: <div className='read-more'>
                <p>
                I saw instances of 3rd graders not being able to write
                their names. This really made me feel like
                giving back to the place where I come from. So
                during my 8th grade summer vacation, I started
                Project Sitara with the guidance of my school
                leader. Through this project, I helped children at
                my village improve their reading and writing
                abilities. We also exchanged our socio-cultural
                experiences through stories. 
                </p>
                <div onClick={onShowLess} className="btn_read-less"><Image src="/assets/images/arrow.png" layout='fill'
    objectFit='contain' alt=""/></div>
                              </div> 
              }
            </div>
            <a  href='https://www.emory.edu/home/index.html' className='ext-link-1' target="_blank" rel="noreferrer">&nbsp;</a>
            <a  href='https://dalailamatrust.org/' className='ext-link-2' target="_blank" rel="noreferrer">&nbsp;</a>
        </SeelStyled>
    
  )
}

export default Section3