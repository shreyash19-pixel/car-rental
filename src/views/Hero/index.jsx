import React from 'react'
import {HeroContainer, HeroDesc, HeroDescWrap, HeroHeading, HeroHeadingSpan, HeroHeadingWrap, HeroImg, HeroImgContainer, HeroImgWrap, HeroInfoWrap, HeroLinks, HeroLinksWrap, HeroWrap, PlanTrip } from '../../styles/Hero'
import HeroCarImg from '../../assets/hero-car-img.webp'


const Hero = () => {
  return (
    <HeroContainer id = "Home">
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
                    <HeroLinks book = "true" href = "#Booking">
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
        </HeroWrap>
    </HeroContainer>
  )
}

export default Hero