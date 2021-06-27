import React from 'react';
import {Button} from '../ButtonElement';
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2,
    TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './InfoElements';
// import {animateScroll as scroll} from 'react-scroll';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText,
     description, buttonLabel, img, alt, primary, dark, dark2, redirectTo}) => {
    
    // const sendMail = () =>{
    //     window.location.href = "mailto:swympools@gmail.com"
    // }

    const goToSwym = () => {
        window.open('https://testflight.apple.com/join/hyUosx0v', '_blank')
    }

    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
              <InfoWrapper>
                  <InfoRow imgStart={imgStart}>


                      <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button 
                                    onClick={goToSwym}
                                    smooth={true}
                                    duration={500}
                                    spy="true"
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                >{buttonLabel} {id === 'services'?'!' : <img className='swymapp' src={require('../../images/swym-apple.svg').default} style={{cursor:'pointer', width:'10em'}} alt='swym logo' onClick={goToSwym} /> }</Button>
                            </BtnWrap>  
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
        
    )
}

export default InfoSection;
