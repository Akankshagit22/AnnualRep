import React,{useState,useEffect} from 'react';
import Link from 'next/link';
import { HeaderNavStyled } from './Style';
import { useSelector } from 'react-redux';
import config from '../../config';

function Header({setOverlayShow,setActiveClass, setLoaded, pageId}) {
    const [selectedMenu,setSelectedMenu]=useState(1);
    const [overlayTrigger, setOverlayTrigger] = useState(false);
    const [dropdown,setDropdown]=useState(false);
    const page = useSelector(state => state.akanksha.page);

    useEffect(() => {
      setSelectedMenu(page);
    }, [page]);

    useEffect(() => {
      
      if(overlayTrigger){
          setOverlayShow(true);
        setTimeout(() => {
            setActiveClass(false);
          }, 1000);
        setTimeout(() => {
          setOverlayShow(false);
        }, 2000);
      }
    
        return () => clearTimeout();
      }, [overlayTrigger]);
      

  
  return (

    <HeaderNavStyled>
    
    <div className='result' onClick={()=>{
      setDropdown(true);
    }}>
        {
          config.pages.find(m => m.id == selectedMenu).name
        }
    </div>

{dropdown?<div className='navigation__dropdown'>
      <button className='btn_close' onClick={()=>{
      setDropdown(false);
    }}>&times;</button>
      <ul>
          {
              config.pages.map((item, index) => (
                  <li key={`menu-item-${index}`}>
                  <Link href={item?.link} >
                    <a onClick={(e)=>{
                          if (pageId != item.link) {
                            setLoaded(false);
                          }
                          setOverlayTrigger(true);
                          setDropdown(false);
                          setSelectedMenu(item?.id)
                          setTimeout(()=>{setOverlayTrigger(false)},1000)}}>{`${item?.id}. ${item?.name}`}</a>
                  </Link>
                      
                  </li>
                  ))
          }
      </ul>
    </div> : null }
    
    </HeaderNavStyled>
  )
}

export default Header