import React, {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import {IconContext} from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    } 

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    // const sendMeAMail = () => {
    //     window.location.href = "mailto:swympools@gmail.com";
    // }

    const goToSwym = () => {
        window.open('https://testflight.apple.com/join/hyUosx0v', '_blank')
    }

    return (
        <>
        <IconContext.Provider value={{color: 'FF975F'}}>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to="/" onClick={toggleHome}>
                  <img src={require('../../images/logo-swym.svg').default} alt='swym logo' style={{marginTop: '-0.4em', maxHeight: '1em'}}/>
                      Swym
                  </NavLogo>
                  <MobileIcon onClick={toggle} style={{color:'#04BEAD'}}>
                      <FaBars/>
                  </MobileIcon>
                  
                  <NavBtn>
                  <NavMenu>
                      <NavItem>
                          <NavLinks
                           to="home"
                           smooth="true"
                           duration={500}
                           spy="true"  
                           exact="true"
                           offset={-80}
                           >Home</NavLinks>
                      </NavItem>
                      {/* <NavItem>
                          <NavLinks
                           to="services"
                           smooth="true"
                           duration={500}
                           spy="true" 
                           exact="true"
                           offset={-80}>About Us</NavLinks>
                      </NavItem> */}
                      <NavItem>
                          <NavLinks
                            to="projects"
                           smooth="true"
                           duration={500}
                           spy="true"  
                           exact="true"
                           offset={-80}>FAQ</NavLinks>
                      </NavItem>
                      <NavBtnLink
                      onClick={goToSwym}
                      smooth="true"
                      duration={500}
                      spy="true" 
                      exact="true"
                      offset={-80}>
                          Get Started
                      </NavBtnLink>
                  </NavMenu>
                     
                  </NavBtn>
              </NavbarContainer>
          </Nav>  
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
