import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { useState,useEffect } from "react";
import Head from 'next/head';
import Header from "../components/Header/Header";
import Overlay from "../components/Overlay/Overlay";
import Character from "../components/Character/Character";
import Section1 from '../components/Section1/Section1'
import Section2 from '../components/Section2/Section2'
import Section3 from '../components/Section3/Section3'
import styles from '../styles/Home.module.css'
import Section4 from "../components/Section4/Section4";
import LandingPage from "../components/LandingPage/LandingPage";
import DonorsBoardOfDirectors from "../components/DonorsBoardOfDirectors/DonorsBoardOfDirectors";
import SectionAlumni from "../components/SectionAlumni/SectionAlumni";
import { useSwipeable } from "react-swipeable";
import { renderBoxes, getOffset } from "../handlers";
import config from '../config';
import { useDispatch, useSelector } from "react-redux";
import { setPage, setMove, setDir } from '../redux/reducer';
import SectionArt from '../components/SectionArt/SectionArt';

function FullPage() {
    const router = useRouter();
    const dispatch = useDispatch();
    const { page_id } = router.query;
    const [overlayShow, setOverlayShow] = useState(false);
    const [activeClass, setActiveClass] = useState(" ");
    const [heroShow, setHeroShow] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const move = useSelector(state => state.akanksha.move);

    const scrollValue = useRef(0);
    const handleTimeout = useRef(null);

    useEffect(() => {
      setLoading(true);
      const loadingTO = setTimeout(() => {
        setLoading(false);
        clearTimeout(loadingTO);
      }, 2000);
    }, []);
  
    useEffect(() => {
      const currentPage = config.pages.find((page) => page.link == page_id);

      if (page_id && !currentPage) {
        router.push("/introduction");
      }

      if(document.getElementById(page_id) && !loaded) {
          document.getElementById(page_id).scrollIntoView({behavior: "auto", block: "end", inline: "start"});
          dispatch(setPage(currentPage.id));
          setLoaded(true);
      }
     
    }, [page_id, heroShow]);
    
    const onSwipeStart = (e) => {
      dispatch(setDir(e.dir == "Right" ? 0 : 1));
      dispatch(setMove(true));
    }
  
    const onSwipeStop = () => {
      dispatch(setMove(false));
    }
  
    const onScrolling = (e) => {
      if (!move) {
        dispatch(setMove(true));
      }

      config.pages.forEach((menuItem) => {
        const offsetSection=document.getElementById(menuItem.link);
        var rqWidth= offsetSection.offsetWidth;
      
        if(getOffset( offsetSection ).left<0 && getOffset( offsetSection ).left>-rqWidth ){
            router.push(menuItem.link);
            dispatch(setPage(menuItem.id));
        }
    
      });

      renderBoxes();
  
      if (handleTimeout.current) {
        clearTimeout(handleTimeout.current);
      }
      
      if ((e.target.scrollLeft - scrollValue.current) > 0) {
        dispatch(setDir(1));
      } else if ((e.target.scrollLeft - scrollValue.current) < 0) {
        dispatch(setDir(0));
      }
  
      scrollValue.current = e.target.scrollLeft;

      handleTimeout.current = setTimeout(() => {
          dispatch(setMove(false));
      }, 300);
    }
  
    const onWheeling = (e) => {
      const scrollDiv = document.getElementById('hrScroll');
      scrollDiv.scrollLeft += e.deltaY*.3;
    }
  
    const swipeHandlers = useSwipeable({
      onSwipeStart: onSwipeStart,
      onSwiping: onSwipeStart,
      onTouchEndOrOnMouseUp: onSwipeStop,
    });
    return (
      <>
       {loading ? (
          <div className="loader-container">
              <div className="spinner"></div>
          </div>
        ) : (
    
      <div className={styles.container} id="main_content">
        <Head>
        <title>Akanksha&apos;s Annual Report 21-22</title>
        <meta name="title" content="Akanksha's Annual Report 21-22"/>
        <meta name="description" content="An artistic take on the organizational structure & activities of Akanksha Foundation through the eyes of Dhanashree Birajdar"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://annualreport.akanksha.org/introduction"/>
        <meta property="og:title" content="Akanksha's Annual Report 21-22"/>
        <meta property="og:description" content="An artistic take on the organizational structure & activities of Akanksha Foundation through the eyes of Dhanashree Birajdar"/>
        <meta property="og:image" content="https://annualreport.akanksha.org/meta-image.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://annualreport.akanksha.org/introduction"/>
        <meta property="twitter:title" content="Akanksha's Annual Report 21-22"/>
        <meta property="twitter:description" content="An artistic take on the organizational structure & activities of Akanksha Foundation through the eyes of Dhanashree Birajdar"/>
        <meta property="twitter:image" content="https://annualreport.akanksha.org/meta-image.png"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
       
       
        <div className='container_main' id="touchsurface">
          {/* <Hero setHeroShow={setHeroShow} heroShow={heroShow}/> */}
          <LandingPage setHeroShow={setHeroShow} heroShow={heroShow}/>
          <div className={`container ${loaded ? "showSection" : ""}`} id="hrScroll" {...swipeHandlers} onScroll={onScrolling} onWheel={onWheeling} >
          {overlayShow ? <Overlay className={activeClass} /> : null}
  
          <Header
            setOverlayShow={setOverlayShow}
            setActiveClass={setActiveClass}
            setLoaded={setLoaded}
            pageId={page_id}
          />
  
            <Character reset={() => { dispatch(setMove(false)) }} />
            
            <div id="introduction"/>
            
            <Section1 />
            <Section2/>
            <Section3/>
            <Section4/>
            <SectionAlumni/>
            <SectionArt/>
            <DonorsBoardOfDirectors/>
            
          </div>
          </div>
        </div>
        )}
  </>
  
  );
}

export default FullPage;