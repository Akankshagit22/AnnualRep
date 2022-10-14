import styled from 'styled-components';

const ArtStyled = styled.div`
    position: relative;
    height: var(--height); 
    width: calc(var(--height) * var(--aspect-art1));
    overflow: hidden;
    &.art-2{
        height: var(--height); 
        width: calc(var(--height) * var(--aspect-art2));
        overflow: hidden;
    }
    .dig-1{
        left: 14%;
        margin-left: -9%;
    }
    .dig-2{
       
        left: 15%;
        margin-left: 13%;
        
    }
    .dig-3{
       
       left: 26%;
       margin-left: 13%;
       
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

    .heart-for-art{
        position: absolute;
        width: 5.8%;
        height: 23%;
        left: 50.87%;
        top: 27%;
        z-index: 4;
        margin-left: -21.5%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
            
    }
    .moving-hen{
        position: absolute;
        width: 7.8%;
        height: 23%;
        left: 44.87%;
        top: -1%;
        z-index: 4;
        margin-left: 17.5%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
            
    }
    .moving-deer{
        position: absolute;
        width: 8.8%;
        height: 23%;
        left: 50.87%;
        top:-10%;
        z-index: 4;
        margin-left: 83.5%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
            
    }
    .white-board-stats{
        position: absolute;
        width: 3.5%;
        height: 15%;
        left: -25%;
        top: 19%;
        z-index: 4;
        margin-left: 78.5%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
            
    }
    .heart-for-art img,.moving-hen img,.moving-deer img,
    .white-board-stats img{
        width:100%;
        height:auto;
    }
    .ext-link-1{
        top: 30%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
        position: absolute;
        width: 3.2%;
        height: 8%;
        z-index: 10;
        right: 33.5%;
        margin-right: 1%;
    }
    .ext-link-2{
        top: 38%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
        position: absolute;
        width: 3.2%;
        height: 9%;
        z-index: 10;
        right: 33.5%;
        margin-right: 1%;


    }
    .ext-link-3{
        top: 26%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
        position: absolute;
        width: 3.2%;
        height: 23%;
        z-index: 10;
        left: 25%;
        margin-left: 1%;


    }
    .ext-link-4{
        top: 26%;
        transform: translateX(50%);
        opacity: 1;
        -webkit-transition: all ease .3s;
        transition: all ease .3s;
        position: absolute;
        width: 3.2%;
        height: 56%;
        z-index: 10;
        left: 31%;
        margin-left: 1%;

    }
    .ext-link-5{
        top: 2%;
        transform: translateX(50%);
        opacity: 1;
        -webkit-transition: all ease .3s;
        -webkit-transition: all ease .3s;
        transition: all ease .3s;
        position: absolute;
        width: 4.2%;
        height: 35%;
        z-index: 10;
        left: 17%;
        margin-left: 1%;

    }
`;

export {ArtStyled}