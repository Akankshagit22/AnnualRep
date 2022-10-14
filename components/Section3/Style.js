import styled from 'styled-components';

const SeelStyled = styled.div`
    position: relative;
    height: var(--height); 
    width: calc(var(--height) * var(--aspect-ratio3));
    overflow: hidden;
    .dig-1{
        left: 14%;
        margin-left: -8%;
    }
    .dig-2{
       
        left: 18%;
        margin-left: 50%;
        
    }
    .dig-3{
       
       left: 18%;
       margin-left:67%;
       
   }
    .dig-1,.dig-2,.dig-3{
        
        top: 20px;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
        position: absolute;
        width: 5%;
        height: 15%;
        z-index: 10;
    }
    .dig-1.active,.dig-2.active,.dig-3.active{
        transform: translateX(50%) rotate(0);
        opacity:0;
    }
    .hands{
        position: absolute;
        width: 3.8%;
        height: 23%;
        left: 52.87%;
        top: 6%;
        z-index: 4;
        margin-left: -23.5%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
            
    }
    .swings{
        position: absolute;
        width: 7.8%;
        height: 23%;
        left: 34.87%;
        top: 29%;
        z-index: 4;
        margin-left: -23.5%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
            
    }
    .see-saw{
        position: absolute;
        width: 8.8%;
        height: 23%;
        left: 38.87%;
        top: 46%;
        z-index: 4;
        margin-left: 23.5%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
            
    }
    .hands img,.swings img,.see-saw img{
        width:100%;
        height:auto;
    }
    .ext-link-1{
        top: 18%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
        position: absolute;
        width: 3.2%;
        height: 5%;
        z-index: 10;
        left: 32.5%;
        margin-left: 1%;
    }
    .ext-link-2{
        top: 22.7%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
        position: absolute;
        width: 3.2%;
        height: 5%;
        z-index: 10;
        left: 32.5%;
        margin-left: 1%;

    }
`;

export {SeelStyled}