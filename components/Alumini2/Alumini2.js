import React from 'react';
import Image from 'next/image';
import { AlumniStyled } from '../Alumni/Style';
const imgLoader = ({ src, width, quality }) => {
    return `${src}?&q=${quality || 95}`
  }

function Alumni2({hide}) {
  return (
    
        <AlumniStyled className={hide?'section_story alumni-2':'section_story section-show alumni-2'} >
            <div className="background">
                <Image loader={imgLoader} src='/assets/images/alumni-bg-2.webp' layout='fill' objectFit='contain' alt=""/>
            </div>
            <div className="foreground">
                <Image loader={imgLoader} src='/assets/images/alumni-fg-2.webp' layout='fill' objectFit='contain' alt=""/>
            </div>
            <div className="dig-3" id="digPos-5-3"></div>
            <div className="dialogue" id="dialogue-5-3">
                <p>
                Throughout my application process for United
                World College, the Alumni Support and
                Engagement (ASE) team provided great backing.
                From helping me to write my name on the
                application form to submitting essays to even
                preparing me for the interviews, the ASE team
                assisted me. The support has been ongoing to
                avail financial aid and sorting out the visa
                formalities. 
                </p>
            </div>
        </AlumniStyled>
    
  )
}

export default Alumni2