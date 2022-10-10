import styled from 'styled-components';

const HeaderNavStyled = styled.div`
    position: fixed;
   z-index: 12;
   top: 20px;
   left: 50%;
   font-family: 'Noto Serif', serif;
   font-size: 14px;
   transform: translateX(-50%);
   @media(min-width:768px){
    font-size: 14px;
    left: 20px;
    transform: translateX(0);

   }
   @media(min-width:992px){
    font-size: 16px;
   }
   .result{
    border: 2px solid #000;
    border-radius: 32px;
    border-image-source: url("/assets/images/border-img.png");
    border-image-slice: 50;
    border-image-width: 40px;
    border-image-outset: 1;
    border-image-repeat: repeat;
    background-color: #533f31;
    min-width: 200px;
    text-align: center;
    display: block;
    padding: 6px 20px;
    color:#fff;
    font-family: 'Work Sans', sans-serif;
    cursor: pointer;
    
   }
   .navigation__dropdown {
        position: absolute;
        width: auto;
        margin-top: 7px;
        padding: 15px;
        text-align: center;
        border-image-outset: 2;
        border: 2px solid #000;
        border-radius: 32px;
        border-image-source: url("/assets/images/border-img.png");
        border-image-slice: 50;
        border-image-width: 40px;
        border-image-outset: 1;
        border-image-repeat: repeat;
        background-color: #634c3f;
        min-width: 280px;
        
        /* max-width:300px; */
        text-align: left;
        color:#fff;
        left: 50%;
        transform: translateX(-50%);
        @media(min-width:768px){
            left: 0;
            transform: translateX(0);
        }
        ul{
            list-style: none;
            padding:15px;
            margin: 0;
        }
        li{
            
            a{
                padding: 7px 4px;
                display: block;
                color:#fff;
                font-family: 'Work Sans', sans-serif;
            }
        }
        .btn_close{
            background: none;
            border:none;
            font-size: 28px;
            position: absolute;
            right: 10px;
            top: 10px;
            cursor: pointer;
            font-family: 'Work Sans', sans-serif;
            color: #fff;
        }
    }

`;


export {HeaderNavStyled}