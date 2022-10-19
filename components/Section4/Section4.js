import React from 'react';
import Image from 'next/image';
import { CommunityStyled } from './Style';

const imgLoader = ({ src, width, quality }) => {
    return `${src}?&q=${quality || 95}`
  }
function Section4({hide}) {
const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    
        <CommunityStyled className={hide?'section_story':'section_story section-show'} id="community-engagement">
            <div className="background">
                <img  src="/assets/images/community-engagement-bg.jpg"  style={{ display: isLoaded ? "none" : "block" }} className="image thumb"/>
                <img className="image full"  src="/assets/images/community-engagement-bg.webp"  onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }}/>
            </div>
            <div className="foreground">
            <Image loader={imgLoader} src='/assets/images/community-engagement-fg.webp' layout='fill'
    objectFit='contain' alt=""/>
            </div>
            <div className="dig-1" id="digPos-4-1"></div>
            <div className="dialogue" id="dialogue-4-1">
                <p>
                Our schools believe that parents are
                co-educators in our journey and thus engage
                them as partners in our learning and
                socio-emotional development.<br/><br/>
                The social-worker leads the
                community-engagement initiatives which are
                aimed towards educating and empowering our
                parents with essential knowledge, tools and
                training to foster a healthy home-environment
                and support our learning, especially in the
                lockdown when homes became classrooms.
                </p>
            </div>
            <div className="dig-2" id="digPos-4-2"></div>
            <div className="dialogue" id="dialogue-4-2">
                <p>
                How can a child thrive when the family is in
                distress? With that philosophy, Akanksha strives
                to nurture the entire family&lsquo;s well-being and
                build economic resilience. My parents became
                aware of the importance of vaccines through
                Akanksha and my school facilitated the
                administering of vaccines. Moreover, when my
                father lost his job as a driver, Akanksha
                supported our family with rations and with
                regular calls checking on my father&lsquo;s mental
                health and employment opportunities. 
                </p>
            </div>
            <div className="dig-3" id="digPos-4-3"></div>
            <div className="dialogue" id="dialogue-4-3">
                <p>
                Because of these community-engagement
                initiatives, Akanksha has become such an
                integral part of our family that my parents
                always call up my teachers to seek any advice.
                My parents allowed me to apply to United World
                College for further studies only after having a
                word with my teacher. This is the level of trust
                my parents have in Akanksha. 
                </p>
            </div>
            <a  href='https://www.brookings.edu/essay/collaborating-to-transform-and-improve-education-systems-a-playbook-for-family-school-engagement/' className='ext-link-1' target="_blank" rel="noreferrer">&nbsp;</a>
            <a  href='https://vidhilegalpolicy.in/research/starting-from-scratch-the-role-of-parents-teachers-and-tech-in-early-childhood-education-during-covid-19/' className='ext-link-2' target="_blank" rel="noreferrer">&nbsp;</a>
        </CommunityStyled>
    
  )
}

export default Section4