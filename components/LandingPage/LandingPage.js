import React,{useEffect,useRef,useState} from 'react';
import { HomeStyled ,SpotlightContent} from './Style'

function LandingPage({heroShow,setHeroShow}) {
 
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
   
    setIsActive(current => !current);
  };

 
  
  return (
    <HomeStyled className={heroShow?" ":"hideHero"}>
    <div className='btn-continue' onClick={()=>{
           handleClick();
          setTimeout(() => {
            setHeroShow(false);
          }, 2000);
         
        }}></div>
      


      <div  className={isActive ? 'cloud-1 anim-cloud-1 clouds' : 'cloud-1 clouds'}>
          <img src="/assets/images/cloud-1.png" />
      </div>
      <div className={isActive ? 'cloud-2 anim-cloud-2 clouds' : 'cloud-2 clouds'}>
          <img src="/assets/images/cloud-2.png" />
      </div>
      <div className={isActive ? 'cloud-3 anim-cloud-3 clouds' : 'cloud-3 clouds'}>
          <img src="/assets/images/cloud-3.png" />
      </div>
      <SpotlightContent id="spotlight_content" className={isActive ? 'fadeOut sp-content ' : 'sp-content '}>
        <h1 className='hero-logo'>
          <img src="/assets/images/logo.png" />
        </h1>
        <div className='slideContent'>
        <h2 className={isActive ? 'fadeOutTitle ' : ' '}>annual report <br/>
            2022</h2>
            <p  className={isActive ? 'fadeInContent content-block' : 'content-block '}>Welcome to Akanksha’s annual report 2021-2022. We take you through the journey of the year, through the eyes of our alumni Dhanashree Birajdar</p>
            </div>
        <div className='line'>
          <img src="/assets/images/underline.png" />
        </div> 
        <h3  onClick={()=>{
           handleClick();
          setTimeout(() => {
            setHeroShow(false);
          }, 8500);
          setTimeout(() => {
            document.querySelector(".container__character").classList.add("charActive");
          }, 11000);
        }} className={isActive ? 'fadeOutButton btn_continue' : 'btn_continue '}>Click here to continue</h3>
      </SpotlightContent>
    </HomeStyled>
  )
}

export default LandingPage