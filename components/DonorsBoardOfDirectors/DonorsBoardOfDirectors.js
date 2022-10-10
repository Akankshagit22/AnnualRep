import React from 'react';
import Image from 'next/image';
import { DonorsStyled } from './Style';
import config from '../../config';

const imgLoader = ({ src, quality }) => {
  return `${src}?&q=${quality || 95}`
}
function DonorsBoardOfDirectors({hide}) {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    
    <DonorsStyled className={hide?'section_story':'section_story section-show'} id="donors-board-of-directors">
        <div className="background">
                <img  src="/assets/images/donors-board-of-directors-bg-thumb.jpg"  style={{ display: isLoaded ? "none" : "block" }} className="image thumb"/>
                <img className="image full"  src="/assets/images/donors-board-of-directors-bg.webp"  onLoad={() => {setIsLoaded(true);}} style={{ opacity: isLoaded ? 1 : 0 }}/>
            </div>

            <div className="foreground">
              <Image loader={imgLoader} src="/assets/images/donors-board-of-directors-fg.webp"  layout='fill'
    objectFit='contain' />
            </div>
            <div className="dig-1" id="digPos-8-1"></div>
            <div className="dialogue" id="dialogue-8-1">
                <p>
                While Akanksha has made me a hero, Akanksha
                personified is my role model! Akanksha has
                reinvented itself in the midst of an
                unprecedented adversity by not shying away
                from asking a fundamental question: What is
                the purpose of a school? It has always laid
                emphasis on holistic development of its
                students by enhancing their intelligence as well
                as emotional quotients.
                </p>
            </div>
            <div className="dig-2" id="digPos-8-2"></div>
            <div className="dialogue" id="dialogue-8-2">
                <p>
                Moreover, Akanksha has taught me to aspire for
                the stars (with sun being our symbol) and
                achieve excellence while staying humble and
                grounded. It has inspired me to be the change
                not only for myself but for the extended
                ecosystem as well. If I can imbibe Akanksha’s
                qualities, I will consider my life successful!
                </p>
            </div>
            <div className="dig-3" id="digPos-8-3"></div>
            <div className="dialogue" id="dialogue-8-3">
                <p>
                On behalf of my fellow students, alums and
                team Akanksha, I sincerely thank our supporters
                who continue to back us.
                </p>
            </div>
            <div className='contentScroll'>
            
              <div className='marquee'>
                <ul>
                  <li>Amazon Development Centre India Pvt. Ltd.</li>
                  <li>Bajaj Finance Ltd.</li>
                  <li>Bank of America India Securities India Ltd.</li>
                  <li>HDFC Ltd.</li>
                  <li>Intertrust Group</li>
                  <li>Landmark Insurance Brokers Pvt. Ltd.</li>
                  <li>Mastercard Technology Pvt. Ltd.</li>
                  <li>RBL Bank Ltd.</li>
                  <li>XTX Markets LLP</li>
                  <li>Apple India Pvt. Ltd.</li>
                  <li>Deloitte Global Financial Advisory India Pvt. Ltd</li>
                  <li>EXL Services (India) Pvt. Ltd.</li>
                  <li>Franklin Templeton Asset Management (India) Pvt. Ltd.</li>
                  <li>IREP Credit Capital Pvt. Ltd.</li>
                  <li>Nice Interactive Solutions India Pvt. Ltd.</li>
                  <li>Standard Chartered Bank</li>
                  <li>TransUnion CIBIL Ltd.</li>
                  <li>UTI Asset Management Company Ltd.</li>
                  <li>VFS Global Services Pvt.Ltd.</li>
                  <li>Akanksha Education Fund Inc.</li>
                  <li>H.T. Parekh Foundation</li>
                  <li>Kotak Mahindra Bank</li>
                  <li>Multiples Equity</li>
                  <li>Meraki Films</li>
                  <li>Rusy & Purviz Shroff Charitable Foundation</li>
                  <li>Praxis Global</li>
                  <li>Kids In Need Of Education (KINOE)</li>
                  <li>United Way of Mumbai</li>
                  <li>JP Morgan</li>
                  <li>Mphasis F1 Foundation</li>
                  <li>Thermax Foundation</li>
                  <li>Saint Gobain India Foundation</li>
                  <li>R.G. Manudhane Foundation for Excellence</li>
                  <li>Give Foundation</li>
                  <li>Hamilton Houseware Limited</li>
                  <li>SVF Investments</li>
                  <li>United World College of South East</li>
                  <li>Associated Auto Parts</li>
                  <li>Macleods Pharma</li>
                  <li>Mindtickle</li>
                </ul>
              </div>
            </div>
            <div className='view-finance'>
              <a href={config.reportFile} target="_blank" rel="noreferrer">&nbsp;</a>
            </div>
    </DonorsStyled>
  )
}

export default DonorsBoardOfDirectors