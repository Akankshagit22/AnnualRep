import styled from 'styled-components';

const AlumniStyled = styled.div`
    position: relative;
    height: var(--height); 
    width: calc(var(--height) * var(--aspect-alumni1));
    overflow: hidden;
    &.alumni-2{
        height: var(--height); 
        width: calc(var(--height) * var(--aspect-alumni2));
        overflow: hidden;
    }
    .dig-1{
        left: 14%;
        margin-left: -9%;
    }
    .dig-2{
       
        left: 95%;
        margin-left: 13%;
        
    }
    .dig-3{
       
       left: 3%;
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
`;

export {AlumniStyled}