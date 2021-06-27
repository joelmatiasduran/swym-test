import React from 'react';
import {HeroContainer, HeroContent, HeroH1, HeroP, HeroBtnWrapper} from './HeroElements';
// import {Button} from '../ButtonElement';


const HeroSection = () => {

    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover);
    // };

    const goSwym = () => {
        window.open('https://testflight.apple.com/join/hyUosx0v', '_blank')
    }

    return (
        <HeroContainer id="home">
           
            <HeroContent>
                <HeroH1>Win Bitcoin by <br></br> Saving Bitcoin </HeroH1>
                <HeroP>Save your Bitcoin with Swym and earn a chance to win the Bitcoin accrued from everyone’s savings. </HeroP>
                <HeroBtnWrapper>
                     
                     <img className='swymapp' src={require('../../images/swym-apple.svg').default} style={{cursor:'pointer', maxWidth:'12em'}} alt='swym logo' onClick={goSwym} />
                       
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
