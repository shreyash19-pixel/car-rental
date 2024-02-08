import React from 'react'
import { HeroBackgroundImg, HeroBackgroundImgWrap, HeroContainer, HeroDesc, HeroDescWrap, HeroHeading, HeroHeadingSpan, HeroHeadingWrap, HeroImg, HeroImgContainer, HeroImgWrap, HeroInfoWrap, HeroLinks, HeroLinksWrap, HeroWrap, PlanTrip } from '../../styles/Hero'
import HeroCarImg from '../../assets/hero-car-img.webp'
import HeroBackImg from '../../assets/hero-backimg.png'

const Hero = () => {
  return (
    <HeroContainer>
        <HeroWrap>
            <HeroInfoWrap>
                <PlanTrip>Plan your trip now</PlanTrip>
                <HeroHeadingWrap>
                    <HeroHeading>Save <HeroHeadingSpan>big</HeroHeadingSpan> with our car rental</HeroHeading>
                </HeroHeadingWrap>
                <HeroDescWrap>
                    <HeroDesc>Rent the car of your dreams. Unbeatable prices, unlimited mile, flexible pick-up options and much more.</HeroDesc>
                </HeroDescWrap>
                <HeroLinksWrap>
                    <HeroLinks book = "true" href = "#">
                        Book Ride
                    </HeroLinks>
                    <HeroLinks href = "#">
                        Learn More
                    </HeroLinks>
                </HeroLinksWrap>
            </HeroInfoWrap>
            <HeroImgContainer>
                <HeroImgWrap>
                    <HeroImg src = {HeroCarImg} />
                </HeroImgWrap>
            </HeroImgContainer>
            <HeroBackgroundImgWrap>
                <HeroBackgroundImg src = {HeroBackImg} />
            </HeroBackgroundImgWrap>
        </HeroWrap>
    </HeroContainer>
  )
}

export default Hero