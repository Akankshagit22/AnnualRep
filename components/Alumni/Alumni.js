import React from 'react';
import Image from 'next/image';
import { AlumniStyled } from './Style';
const imgLoader = ({ src, quality }) => {
  return `${src}?&q=${quality || 95}`
}
function Alumni({hide}) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    
        <AlumniStyled className={hide?'section_story':'section_story section-show'} >
            <div className="background">
                <img  src="/assets/images/alumni-bg-1.webp"  style={{ display: isLoaded ? "none" : "block" }} className="image thumb"/>
                <img className="image full"  src="/assets/images/alumni-bg-1.webp"  onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }}/>
            </div>
            <div className="foreground">
                <Image loader={imgLoader} src='/assets/images/alumni-fg-1.webp' layout='fill' objectFit='contain' alt=""/>
            </div>
            <div className="dig-1" id="digPos-5-1"></div>
            <div className="dialogue" id="dialogue-5-1">
                <p>
                With this, my 12-year school journey at
                Akanksha has come to an end. I was very
                emotional at the time of graduating but I am
                also excited to be a part of Akanksha’s alumni
                network of 4,000 students whose success has
                inspired me immensely.
                </p>
            </div>
            <div className="dig-2" id="digPos-5-2"></div>
            <div className="dialogue" id="dialogue-5-2">
                <p>
                I am also happy to join the alumni portal which
                is a great way to network among alumni and
                stay connected with Akanksha.
                </p>
            </div>
            
        </AlumniStyled>
    
  )
}

export default Alumni