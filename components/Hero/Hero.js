import React,{useState,useEffect} from 'react'
import { HeroStyled } from './Style'

export default function Hero({heroShow,setHeroShow}) {
  useEffect(() => {
    //setHeroShow(true);
    
  }, []);

    // useEffect(() => {

    //     if(continueTrigger){
    //     setContinueTrigger(true);
    //     setTimeout(() => {
    //         setActiveClass(false);
    //       }, 1000);
    //     setTimeout(() => {
    //       setContinueTrigger(false);
    //     }, 2000);
    // }
    
    //     return () => clearTimeout();
    //   }, [continueTrigger]);
  return (
    // <HeroStyled className={heroShow?" ":"hideHero"}>
    //     <img src="/assets/images/hero.jpg"/>
    //     <div className='btn-continue' onClick={()=>{
    //       setTimeout(() => {
    //         setHeroShow(false);
    //       }, 2000);
    //     }}></div>
    // </HeroStyled>
    <div></div>
  )
}
