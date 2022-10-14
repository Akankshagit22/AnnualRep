import styled from 'styled-components';

const AcademicStyled = styled.div`
    position: relative;
    height: var(--height); 
    width: calc(var(--height) * var(--aspect-ratio2));
    overflow: hidden;
    .dig-1{
        left: 14%;
        margin-left: -8%;
    }
    .dig-2{
       
        left: 18%;
        margin-left: 11%;
        
    }
    .dig-1,.dig-2{
        
        top: 20px;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
        position: absolute;
        width: 5%;
        height: 15%;
        z-index: 10;
    }
    .dig-1.active,.dig-2.active{
        transform: translateX(50%) rotate(0);
        opacity:0;
    }
    .ext-link-1{
        top: 4%;
        transform: translateX(50%);
        opacity: 1;
        -webkit-transition: all ease .3s;
        transition: all ease .3s;
        position: absolute;
        width: 3%;
        height: 12%;
        z-index: 10;
        left: 61%;
        margin-left: 11%;
    }
    .ext-link-2{
        top: 16%;
        transform: translateX(50%);
        opacity: 1;
        -webkit-transition: all ease .3s;
        transition: all ease .3s;
        position: absolute;
        width: 3%;
        height: 10%;
        z-index: 10;
        left: 61%;
        margin-left: 11%;
    }
`;

export {AcademicStyled}