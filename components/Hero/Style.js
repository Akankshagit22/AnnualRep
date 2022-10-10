import styled from 'styled-components';

const HeroStyled = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background-color: #dcebe8;
    transition: all ease .8s;
    &.hideHero{
       margin-top:-100vh;
       display: inline-block;
   }
    img{
        min-height: 100%;
    max-height: 100%;
    object-fit: contain;
    height: 100% !important;
    width: 100%;
    }
    .btn-continue{
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: 100;
        top: 0;
        cursor: pointer;
        left: 0;
    }
`;

export {HeroStyled}
