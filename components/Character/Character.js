import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { CharAnim } from './Style';


const Character = ({ reset }) => {
    const staticTimeout = useRef(null);
    const move = useSelector(state => state.akanksha.move);
    const direction = useSelector(state => state.akanksha.direction);
    const [action, setAction] = useState("static");
    
    useEffect(() => {
        if (staticTimeout.current) {
            clearTimeout(staticTimeout.current);
        }

        if (move) {
            setAction("walking");
        } else {
            if (action != "static") {
                setAction("static");
            }

            staticTimeout.current = setTimeout(() => {
                setAction("idle");
                reset();
                clearTimeout(staticTimeout.current);
            }, 6000);
        }
    }, [move, direction]);

    return(

        <CharAnim className={direction == 1 ? "" : "bwd"} id="character">
            <div className='container__character'>
                <img src='/assets/images/girl-static.gif' className={action == "static" ? "slider-img" : "display-none"} />
                <img src="/assets/images/walking-girl.gif" className={action == "walking" ? "slider-img" : "display-none"}/>
                <img src="/assets/images/walking-girl-idle.gif" className={action == "idle" ? "slider-img" : "display-none"}/>
            </div>
        </CharAnim>
    )

}

export default Character;
