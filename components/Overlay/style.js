import styled from 'styled-components';

const OverlayStyled = styled.div`
    position: fixed;
   z-index: 1000;
   background: #bee9fc;
   width: 100%;
   height: 100%;
   transition: all ease .3s;
   animation: opacityAnim 2s forwards;
`;


export {OverlayStyled}