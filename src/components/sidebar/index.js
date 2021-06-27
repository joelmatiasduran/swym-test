import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper,
SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute
} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {

    const sendMeAMailToo = () => {
        window.open('https://t.me/playswym', '_blank');
    }

    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                     to="about"
                     onClick={toggle}
                     smooth="true"
                     duration={500}
                     spy="true" 
                     exact="true"
                     offset={-80}>
                        Home
                    </SidebarLink>
                    <SidebarLink
                     to="projects" 
                     onClick={toggle}
                     smooth="true"
                     duration={500}
                     spy="true" 
                     exact="true"
                     offset={-80}>
                        FAQ
                    </SidebarLink>
                    {/* <SidebarLink
                     to="services" 
                     onClick={toggle}
                     smooth="true"
                     duration={500}
                     spy="true" 
                     exact="true"
                     offset={-80}>
                        About US
                    </SidebarLink> */}
                    {/* <SidebarLink
                     to="contact" 
                     onClick={toggle}
                     smooth="true"
                     duration={500}
                     spy="true" 
                     exact="true"
                     offset={-80}>
                        Contact Us
                    </SidebarLink> */}
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute
                     onClick={sendMeAMailToo}>
                        Contact Us
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
