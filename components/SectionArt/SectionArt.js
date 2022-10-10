import React from 'react'
import ArtForAkanksha from '../ArtForAkanksha/ArtForAkanksha'
import ArtForAkanksha2 from '../ArtForAkanksha2/ArtForAkanksha2'
import { SectionArtStyled } from './Style'

function SectionArt({hide}) {
  return (
    
    <SectionArtStyled className={hide?'section_story':'section_story section-show'} id="art-for-akanksha">
       <ArtForAkanksha/>
       <ArtForAkanksha2/>
    </SectionArtStyled>
  )
}

export default SectionArt