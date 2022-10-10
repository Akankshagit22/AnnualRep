import styled from 'styled-components';

const DonorsStyled = styled.div`
    position: relative;
    height: var(--height); 
    width: calc(var(--height) * var(--aspect-donor));
    overflow: hidden;
    .dig-1{
        left: 14%;
        margin-left: -12%;
    }
    .dig-2{
       
        left: 14%;
        margin-left: -5%;
        
    }
    .dig-3{
       
       left: 3%;
       margin-left:29%;
       
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
    .contentScroll{
        position: absolute;
        width: 3%;
        height: 27.6%;
        z-index: 10;
        top: 15.7%;
        overflow: hidden;
        left: 40.3%;
        margin-left: 29%;
    }
    .marquee {
        top: 6em;
        position: relative;
        box-sizing: border-box;
        animation: marquee 30s linear infinite;
        white-space: normal;
        
            ul{
                padding: 0 17px 0 0;
                margin: 0;
                list-style: none;
            }
            li{
                margin-bottom: 2vh;
                font-family: 'Work Sans',sans-serif;
                font-weight: 600;
                white-space: normal;
                font-size: 1.8vh;
                color: #000;
            }
        }

        .marquee:hover {
            animation-play-state: paused;
        }
        .view-finance{
            
            position: absolute;
            width: 4.8%;
            height: 67.6%;
            z-index: 10;
            top: 22.7%;
            overflow: hidden;
            left: 62.63%;
            margin-left: 29%;
            a{
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
            }
        }

`;

export {DonorsStyled}