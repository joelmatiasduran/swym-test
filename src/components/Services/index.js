import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-7.svg';
import Icon3 from '../../images/svg-3.svg';
import {ServicesContainer, ServicesH1,ServicesWrapper, 
ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServicesElements';

const Services = () => {
    return (
        <>
          <ServicesContainer id="projects">
            <ServicesH1>How Swym Works</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <a href='/' style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}} target='_blank' > 
                      <ServicesIcon src={Icon1}/>
                      <ServicesH2>SAVE</ServicesH2>
                      <ServicesP>Download the Swym App and start saving as little as one Satoshi</ServicesP>
                    </a>
                </ServicesCard>

                <ServicesCard>
                    <a href='/'style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}} target='_blank' > 
                      <ServicesIcon src={Icon2}/>
                      <ServicesH2>WIN</ServicesH2>
                      <ServicesP>Keep your money save with Swym for a full week and have a chance to win up to 10 BTC</ServicesP>
                    </a>
                </ServicesCard>

                <ServicesCard>
                    <a href='/' style={{color: 'inherit', textDecoration: 'none', textAlign: 'center'}}> 
                      <ServicesIcon src={Icon3}/>
                      <ServicesH2>AGAIN</ServicesH2>
                      <ServicesP>Never lose when you always have your savings! Keep saving for a chance to win each week</ServicesP>
                    </a>
                </ServicesCard>

            </ServicesWrapper>
          </ServicesContainer>  
        </>
    )
}

export default Services;
