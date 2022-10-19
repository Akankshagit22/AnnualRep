import styled from 'styled-components';

const CommunityStyled = styled.div`
    position: relative;
    height: var(--height); 
    width: calc(var(--height) * var(--aspect-ratio4));
    overflow: hidden;
    .dig-1{
        left: 7%;
        margin-left: -9%;
    }
    .dig-2{
       
        left: 18%;
        margin-left: 13%;
        
    }
    .dig-3{
       
       left: 18%;
       margin-left:31%;
       
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
    .ext-link-1{
        top: 28%;
        transform: translateX(50%);
        opacity: 1;
        transition: all ease .3s;
        position: absolute;
        width: 3%;
        height: 25%;
        z-index: 10;
        left: 57%;
        margin-left: 11%;
    }
    .ext-link-2{
        top: 16%;
        transform: translateX(50%);
        opacity: 1;
        -webkit-transition: all ease .3s;
        -webkit-transition: all ease .3s;
        transition: all ease .3s;
        position: absolute;
        width: 4%;
        height: 36%;
        z-index: 10;
        left: 61%;
        margin-left: 24%;
    }
`;

export {CommunityStyled}