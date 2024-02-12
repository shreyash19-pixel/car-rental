import React from 'react'
import { MobileAppImg, MobileAppImgContainer, MobileAppImgWrap, MobileContainer, MobileInfoWrap, MobileStoreImg, MobileStoreImgContainer, MobileStoreImgWrap, MobileWrapper } from '../../styles/Mobile'
import { ChooseDesc, ChooseUsHeadingWrap } from '../../styles/About'
import { StepsHeading2 } from '../../styles/Steps'
import Playstore from '../../assets/playstore.svg'
import Appstore from '../../assets/appstore.svg'
import MobileImage from '../../assets/mobile-app.jpg'



const Mobile = () => {


  return (
    <MobileContainer>
        <MobileWrapper>
            <MobileInfoWrap>
                <ChooseUsHeadingWrap>
                    <StepsHeading2>Download our app to get most out of it</StepsHeading2>
                    <ChooseDesc>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</ChooseDesc>
                </ChooseUsHeadingWrap>
                <MobileStoreImgContainer>
                    <MobileStoreImgWrap>
                        <MobileStoreImg src = {Playstore} />
                    </MobileStoreImgWrap>
                    <MobileStoreImgWrap>
                        <MobileStoreImg src = {Appstore} />
                    </MobileStoreImgWrap>
                </MobileStoreImgContainer>
            </MobileInfoWrap>
            <MobileAppImgContainer>
                <MobileAppImgWrap>
                    <MobileAppImg src = {MobileImage} />
                </MobileAppImgWrap>
            </MobileAppImgContainer>
        </MobileWrapper>
    </MobileContainer>
  )
}

export default Mobile