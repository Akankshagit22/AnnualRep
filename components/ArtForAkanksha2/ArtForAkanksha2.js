import React from 'react';
import Image from 'next/image';
import { ArtStyled } from '../ArtForAkanksha/Style';
const imgLoader = ({ src, quality }) => {
  return `${src}?&q=${quality || 95}`
}
function ArtForAkanksha2({hide}) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    
    <ArtStyled className={hide?'section_story art-2':'section_story section-show  art-2'}>
        <div className="background">
                <img  src="/assets/images/art-for-akanksha-bg-2.jpg" style={{ display: isLoaded ? "none" : "block" }} className="image thumb" alt=""/>
                <img className="image full"  src="/assets/images/art-for-akanksha-bg-2.webp"  onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }}/>
            </div>
            <div className="foreground">
              <Image loader={imgLoader} src="/assets/images/art-for-akanksha-fg-2.webp"  layout='fill'
    objectFit='contain' alt=""/>
            </div>
            <div className="dig-3" id="digPos-6-3"></div>
            <div className="dialogue" id="dialogue-6-3">
                <p>
                While we students are at the centre of
                everything that Akanksha does, the organisation
                also cares deeply for its employees.
                Employee well-being is at the top of the agenda
                at Akanksha. Our schools have continued to
                devise and revise policies to support the
                ongoing needs of our people, forged
                partnerships to support their mental health &
                well-being as well as institutionalised best
                practices towards a healthy and supportive
                work environment. 
                </p>
            </div>
            <div className="white-board-stats">
              <img  src="/assets/images/white-board-stats.gif"  alt=""/>

            </div>
            <a  href='https://diksha.gov.in/play/colletion/do_3130887225525698561176?contentType=TextBook' className='ext-link-3' target="_blank" rel="noreferrer">&nbsp;</a>
           
    </ArtStyled>
  )
}

export default ArtForAkanksha2