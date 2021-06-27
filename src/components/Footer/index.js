import React from 'react';
import {animateScroll as Scroll} from 'react-scroll';
import {FaTelegram,FaTwitter} from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';


const Footer = () => {
    
    const toggleHome = () => {
        Scroll.scrollToTop();
    }

    
    const goToMyTelegram = () => {
        window.open('https://t.me/playswym', '_blank');
    }

    const goToMyTwitter = () => {
        window.open('https://twitter.com/SwymPools', '_blank')
    }
    

    return (
        <>
          <FooterContainer>
            <FooterWrap>  
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Swym Pools LLC, 2021
                        </SocialLogo>
                        {/* <WebsiteRights>Swym Pools LLC © {new Date().getFullYear()} All rights reserved.</WebsiteRights> */}
                        <SocialIcons>                            
                           <SocialIconLink>
                                <FaTwitter onClick={goToMyTwitter} target="_blank" aria-label="LinkedIn"/>
                                {/* <FaTelegram onClick={goToMyTelegram} target="_blank" aria-label="LinkedIn"/> */}
                            </SocialIconLink>
                            <SocialIconLink>
                                {/* <FaTwitter onClick={goToMyTwitter} target="_blank" aria-label="LinkedIn"/> */}
                                <FaTelegram onClick={goToMyTelegram} target="_blank" aria-label="LinkedIn"/>
                            </SocialIconLink> 
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>    
          </FooterContainer>  
        </>
    )
};

export default Footer;
