import styled from 'styled-components';

const CharAnim = styled.div`
    position: fixed;
    top: 0;
    width: 180px;
    height: 100%;
    z-index: 5;
    pointer-events: none;

    .container__character {
        transition: width .25s ease-in-out,height .25s ease-in-out,top .25s ease-in-out,left 1s ease;
        position: relative;
        width: 28vh;
        height: 35vh;
        top: 45%;
        margin-left: 8%;
        left: -200%;
        &.charActive{
            left:0;
        }
        @media(max-width:767px){
            top: 53%;
        }
    }
    img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        pointer-events: none;
    }
    &.bwd img{
        transform: scaleX(-1);
    }

`;

export {CharAnim};