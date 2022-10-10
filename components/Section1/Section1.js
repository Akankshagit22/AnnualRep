import React,{useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { IntroStyled } from './Style';
const imgLoader = ({ src, quality }) => {
  return `${src}?&q=${quality || 95}`
}

function Section1({hide}) {
  const [showLess,setShowLess]=useState(true);
  const onShowMore=()=>{
    setShowLess(false);
  }
  const onShowLess=()=>{
    setShowLess(true);
  }
  return (
    
    <IntroStyled className={hide?'section_story':'section_story section-show'} id="home">
    
        <div className="background">
                <Image loader={imgLoader} src="/assets/images/intro-bg.webp" layout='fill'
    objectFit='contain' alt=""/>
            </div>
            <div className="foreground">
              <Image loader={imgLoader} src="/assets/images/intro-fg.webp"  layout='fill'
    objectFit='contain' alt=""/>
            </div>
          
            <div className="hand-wave">
              <img  src="/assets/images/hand-wave.gif"  alt=""/>
            </div>
            <div className="star">
            <img  src="/assets/images/star.gif"  alt=""/>

            </div>
            <div className="trophy">
            <img  src="/assets/images/trophy.gif"  alt=""/>

            </div>
            <div className="dig-1" id="digPos-1"></div>
            <div className="dialogue" id="dialogue-1">
            {showLess?
              <div className='read-less'>
                              <p>
                              I had been in an Akanksha school in Pune for 12
years until I graduated 10th grade this year. I
have secured admission at United World College
for an IB (International Baccalaureate) Diploma
course.
              </p>
              <div onClick={onShowMore} className="btn_read-more">
                <img src="/assets/images/arrow.png"  alt=""/>
              </div>
              </div>: <div className='read-more'>
              <p>
              Post that, I aspire to complete my
                graduation and work in the Indian education
                space to provide holistic education to each and
                every kid, just like how Akanksha has been
                doing for over 30 years!
                Through this report, I&lsquo;ll take you through
                Akanksha&lsquo;s journey in the last year. 
                              </p>
                              <div onClick={onShowLess} className="btn_read-less"><img src="/assets/images/arrow.png"  alt=""/></div>
                              </div> 
              }
           

            </div>
            <div className="dig-2" id="digPos-2"></div>
            <div className="dialogue dialogue-min" id="dialogue-2">
                <p>
                But before that, here is a message from our
CEO Saurabh Taneja.
                </p>
            </div>
            <div className="dig-3" id="digPos-3"></div>
            <div className="dialogue dialogue-min" id="dialogue-3">
                <p>
                Come, let me give you a tour of my school!
                </p>
            </div>
           
            <Popup  trigger={  <div className="letter">
              <Link href="#" >
                <a>
                <img  src="/assets/images/letter.gif"  alt=""/>
                </a>
              </Link>
            </div>} modal>
            {close => (
              <>
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className='popup-container'> 
              <SimpleBarReact style={{ maxHeight: "70vh" }}>
           
                              As the world opened up to the new normal, Akanksha expanded its presence this
                year in the third city by starting 6 new schools in Nagpur in collaboration with
                Nagpur Municipal Corporation taking the tally of our network of schools to 26.
                This public-private partnership is unique as the government has pledged to
                support the schools by contributing 45% of cost per pupil and Akanksha will raise
                the balance.<br/><br/>
                Our schools were shut for most of the year and our children and their families
                faced some major financial and socio-emotional challenges. However, our team
                supported them through thick and thin, prioritising their well-being and ensuring
                full vaccination for nearly 90% of the families . As schools reopened, 99% of our
                students returned to classrooms. However, tough challenges lie ahead of us as
                we aim to bridge the learning gaps. While 90% of students, nationally, lost at
                least one linguistic ability due to prolonged school closures, nearly 80% of our
                students improved their reading and comprehension levels within just a year by
                making the most of digital tools. This makes us feel confident about taking the
                blended-learning approach, which is a key innovation in our pedagogy post
                pandemic.<br/><br/>
                This year, 89% of Akanksha alumni enrolled in undergraduate colleges (or
                equivalent) in India and abroad. We are glad they have stayed on the path of
                education despite the online classes in college and uncertainties around
                admission processes. A strong team of 56 alumni supporting our alumni network
                has made this possible by constantly acting as a bridge between Akanksha and
                our communities as ambassadors, associates and interns.<br/><br/>
                All in all, we won some wars, lost some battles but learnt a lot. Onwards, we
                continue to reimagine learning for our students to unlock their potential and thus
                contribute to the larger Indian education ecosystem by demonstrating what’s
                possible for children from underserved communities, one school at a time. All this
                is only possible because of the sheer commitment of our team, our partners’
                belief in us and your continued support on this journey of Aspiring, Achieving and
                Being the Change. 
                <br/><br/>
                <p style={{textAlign:"right",marginRight:"30px"}}>-Saurabh Taneja</p>
                </SimpleBarReact></div>
</>
                )}
            </Popup>
    </IntroStyled>
  )
}

export default Section1