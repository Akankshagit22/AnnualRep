import React from 'react'
import Alumni2 from '../Alumini2/Alumini2'
import Alumni from '../Alumni/Alumni'
import { SectionAlumniStyled } from './Style'

function SectionAlumni({hide}) {
  return (
    
    <SectionAlumniStyled className={hide?'section_story':'section_story section-show'} id="alumni">
        <Alumni/>
        <Alumni2/>
    </SectionAlumniStyled>
  )
}

export default SectionAlumni