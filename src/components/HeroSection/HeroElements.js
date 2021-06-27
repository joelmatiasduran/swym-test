import styled from 'styled-components';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';
import img from '../../images/swym-cellphone.svg';


export const HeroContainer = styled.div`
    font-family: 'Luckiest Guy', cursive;
    background-Size: 35em;
    background-image: url(${img});
    background-position: 90% 110%;
    background-Repeat: no-repeat;
    display:flex;
    justify-content:left;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0 ;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2)0%), rgba(0,0,0,0.6);
        z-index:2;
    }

    @media screen and (max-width: 768px) {
        background: transparent;
        background-Size: cover;
        /* background-Size: 9em; */
        /* background-position: 96% 16%; */
    }
    @media screen and (max-width: 480px){
        background-Size: cover;
        background: transparent;
        /* background-Size: 10em; */
        /* background-position: 90% 110%; */
    }
    @media (max-width:320px)  { /* smartphones, iPhone, portrait 480x320 phones */ 
        background-Size: cover;
        background: transparent;
    }
    @media (max-width:481px)  { /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */ 
        background-Size: cover;
        background: transparent;
    }
    @media (max-width:641px)  { /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */ 
        background-Size: cover;
        background: transparent;
    }
    @media (max-width:961px)  { /* tablet, landscape iPad, lo-res laptops ands desktops */ 
        background-Size: cover;
        background: transparent;
    }
    @media (max-width:1025px) { /* big landscape tablets, laptops, and desktops */ 
        background-Size: cover;
        background: transparent;
    }
`;
export const HeroBg = styled.div`
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
    width: 100%;
    height:100%;
    overflow: hidden;
`;

// export const VideoBg = styled.video`
//     width:100%;
//     height:100%;
//     -o-object-fit: cover;
//     object-fit:cover;
//     background:#232a34;
// `

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0px 50px;
    display: flex-start;
    flex-direction: column;
    align-items: left;

    @media screen and (max-width: 768px) {
        padding: 0px;
    }
    @media screen and (max-width: 480px){
        padding: 0px;
    }
`
export const HeroH1 = styled.div`
    margin-top:-100px;
    color: #FF975F;
    font-size: 5.5em;
    text-align: left;

    @media screen and (max-width: 768px) {
        text-align: center;
        margin-top: 0;
        font-size: 50px;
    }

    @media screen and (max-width: 480px){
        text-align: center;
        margin-top: 0;
        font-size: 50px;
    }

`

export const HeroP = styled.p`
    /* letter-spacing: 0.01em; */
    font-family: 'Lato', sans-serif;
    margin-top: 44px;
    color: black;
    font-size: 24px;
    text-align: justify;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        padding: 0px 20px;
           
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px; 
    display: flex;
    flex-direction: flex-start;
    
    
    @media screen and (max-width: 768px) {
        align-items: center;
        flex-direction: column;
    
    }
    @media screen and (max-width: 480px){
        align-items: center;
        flex-direction: column;
      

    }
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`