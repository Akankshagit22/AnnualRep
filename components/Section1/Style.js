import styled from 'styled-components';

const IntroStyled = styled.div`
    position: relative;
    height: var(--height); 
    width: calc(var(--height) * var(--aspect-ratio1));
    overflow: hidden;
    .dig-1{
        left: 18%;
        top: 20px;
        margin-left: -8%;
    }
    .dig-2{
        left: 18%;
        top: 20px;
        margin-left: 5%;
    }
    .dig-3{
        left: 50%;
        top: 20px;
        margin-left: 39%;
    }
    .dig-4{
        left: 50%;
        top: 20px;
        margin-left: 55%;
    }
    .dig-1,.dig-2,.dig-3,.dig-4{
        top: 20px;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
        position: absolute;
        width: 5%;
        height: 15%;
        z-index: 10;
    }
    .dig-1.active,.dig-2.active,.dig-3.active,.dig-4.active{
        transform: translateX(50%) rotate(0);
        opacity:0;
    }
`;

export {IntroStyled}