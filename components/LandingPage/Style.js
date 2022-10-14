import styled from 'styled-components';

const HomeStyled = styled.div` 
    position: relative;
    display: inline-block;
    height: 100vh;
    min-height: 100vh;
    min-width: 100vw;
    z-index: 999;
    left: 0;
    top: 0;
    overflow: hidden;
    background: #DCEAE7;
    color: #000;
    &.hideHero{
       margin-top:-100vh;
       display: inline-block;
       transition: all ease 1s;
    transition-delay:1s;
       
   }
   .hero-logo{
    width: 100%;
    max-width: 21vw;
    margin: 0 auto;
    color: #000;
    @media(max-width:600px){
        max-width: 200px;
        margin-bottom: 20px;
    }
    @media(max-height:600px){
        max-width: 40vh;
    }
      img{
            object-fit: contain;
            width: 100%;
        }
   }
   .clouds{
        position: absolute;
        img{
            object-fit: contain;
            width: 100%;
        }
   }
    .cloud-1{
        left: 0;
        top: 20px;
        z-index: 2;
        width: 25%;
        &.anim-cloud-1{
            animation: cloud1 .5s forwards;
            animation-delay: .1s;
        }
       
    }
    .cloud-2{
        right: 0;
        top: 60%;
        z-index: 2;
        width: 25%;
        &.anim-cloud-2{
            animation: cloud2 .7s forwards;
            animation-delay: .2s;
        }
       
    }
    .cloud-3{
        left: 50%;
        bottom: 0;
        z-index: 2;
        width: 80%;
        transform: translateX(-50%);
        &.anim-cloud-3{
            animation: cloud3 .8s forwards;
            animation-delay:.3s;
        }
    }
`;
const SpotlightContent = styled.div`
    
    &.sp-content{
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        z-index:3;
        transition:all ease .3s;
    }
    &.fadeOut{
        animation: fadeOut 1.5s forwards;
        animation-delay:.3s;
        z-index: -1;
    }
    h1{
        margin: 0;
        width: 100%;
        text-align: center;
        color: #000;
    }
    h2{
        text-align: center;
        text-transform: uppercase;
        font-family: 'comic_catregular';
        font-size: 9vw;
        margin: 0;
        font-weight: bold;
        width: 100%;
        color: #000;
        @media(max-width:600px){
            font-size: 45px;
        }
        @media(max-height:600px){
            font-size: 12vh;
            padding: 26px 0;
        }
        &.fadeOutTitle{
            animation: fadeOutTitleAnim 1.5s forwards;
            animation-delay:1s;
            z-index: -1;
        }

    }
    .slideContent{
        position: relative;
        z-index: 3;

    }
    p.content-block{
        position: absolute;
        text-align: center;
        font-size: 2vw;
        line-height: 1.5;
        margin: 0;
        font-weight: bold;
        width: 100%;
        max-width: 1000px;
        color: #000;
        left: 50%;
        transform: translate(-50%,-50%);
        top: 50%;
        padding:0 20px;
        opacity: 0;
        @media(max-width:600px){
            font-size: 16px;
        }
        @media(max-height:600px){
            font-size: 5vh;
            line-height: 1.2;
        }
        &.fadeInContent{
            animation: fadeInContent 1.5s forwards;
            animation-delay:1.7s;
            z-index: -1;
        }
    }
    .line{
        width: 20vw;
        text-align: center;
        margin: 0 auto;
        transition: all ease .3s;
        img{
            width: 100%;
        }
        @media(max-height:600px){
            width: 25vh;
        }
        &.fadeOutLine{
            animation: fadeOutLineAnim 1.5s forwards;
            animation-delay:1s;
            z-index: -1;
        }
    }
    h3.btn_continue{
        font-size: 14px;
        font-weight: 400;
        font-family: 'Work Sans', sans-serif;
        cursor: pointer;
        letter-spacing: -1px;
        padding:0 20px 40px;
        visibility: hidden;
        text-align: center;
        transition:all ease .3s;
       
        @media(min-width:768px){
            font-size: 20px;
            margin-top: -30px;
        }
        &.fadeInButton{
            z-index: -1;
            animation: fadeInButtonAnim 1.5s forwards;
            animation-delay:2s;
        }
        img{
            width:25vw;
            max-width: 250px;
            display: inline-block;
            @media(max-width:600px){
                width:150px;
            }
            @media(max-height:600px){
                width:125px;
            }
        }
    }
   
`;

export {HomeStyled,SpotlightContent}