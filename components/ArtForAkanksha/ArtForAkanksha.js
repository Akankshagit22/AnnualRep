import React,{useState}  from 'react';
import Image from 'next/image';
import { ArtStyled } from './Style';
const imgLoader = ({ src, quality }) => {
  return `${src}?&q=${quality || 95}`
}
function ArtForAkanksha({hide}) {
  const [showLess,setShowLess]=useState(true);
  const onShowMore=()=>{
    setShowLess(false);
  }
  const onShowLess=()=>{
    setShowLess(true);
  }
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    
    <ArtStyled className={hide?'section_story':'section_story section-show'} >
        <div className="background">
                <img  src="/assets/images/art-for-akanksha-bg-1.jpg"  alt="" style={{ display: isLoaded ? "none" : "block" }} className="image thumb"/>
                <img className="image full"  src="/assets/images/art-for-akanksha-bg-1.webp"  onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }}/>
            </div>
            <div className="foreground">
              <Image loader={imgLoader} src="/assets/images/art-for-akanksha-fg-1.webp"  layout='fill'
    objectFit='contain' alt=""/>
            </div>
            <div className="dig-1" id="digPos-6-1"></div>
            <div className="dialogue" id="dialogue-6-1">
            {showLess?
              <div className='read-less'>
                <p>
                Art at Akanksha goes beyond just drawing and
                painting. When I was in Grade 5, we needed
                new desks in our school because the old ones
                were too small for us. But we were short on
                funds and the funds couldn’t be allocated in
                the middle of the year.
                </p>
                <div onClick={onShowMore} className="btn_read-more">
                <Image src="/assets/images/arrow.png" layout='fill'
    objectFit='contain' alt=""/>
              </div>
              </div>: <div className='read-more'>
                <p>
                Fortunately, one of the donors agreed to fund half of the required
                amount on the condition that we raise the other
                half through art. We took on this challenge. As
                it was Diwali time, we made lanterns, greeting
                cards, bags and other decorative stuff to hold a
                sale exhibition at Thermax. To our surprise, we
                raised more than what we expected and
                through art, we solved our problem of desks.
                </p>
                <div onClick={onShowLess} className="btn_read-less"><Image src="/assets/images/arrow.png" layout='fill'
    objectFit='contain' alt=""/></div>
                              </div> 
              }
            </div>
            <div className="dig-2" id="digPos-6-2"></div>
            <div className="dialogue" id="dialogue-6-2">
                <p>
                <strong>#HeartforArt Campaign</strong> was initiated to raise
                funds for Akanksha &lsquo;s programmes. The
                campaign raised funds for digital tablets and
                enabled our students to continue their
                schooling journey. Every donor who contributed
                through this campaign received an original
                artwork created by our students as a token of
                appreciation for their contributions.
                </p>
            </div>

            <div className="heart-for-art">
              <img  src="/assets/images/heart-for-art.gif"  alt=""/>
            </div>
            <div className="moving-hen">
              <img  src="/assets/images/moving-hen.gif"  alt=""/>
            </div>
            <div className="moving-deer">
              <img  src="/assets/images/moving-deer.gif"  alt=""/>

            </div>
            <a  href='https://www.youtube.com/watch?v=MT1ees9oI7w' className='ext-link-1' target="_blank" rel="noreferrer">&nbsp;</a>
            <a  href='https://www.akanksha.org/wp-content/uploads/2021/10/IMG-20211014-WA0001.jpg' className='ext-link-2' target="_blank" rel="noreferrer">&nbsp;</a>
            <a  href='https://www.akanksha.org/heart-for-art/' className='ext-link-4' target="_blank" rel="noreferrer">&nbsp;</a>
            <a  href='https://aaghazedosti.wordpress.com/' className='ext-link-5' target="_blank" rel="noreferrer">&nbsp;</a>
           
            
    </ArtStyled>
  )
}

export default ArtForAkanksha