import React from 'react'
import { AboutCarsImg, AboutCarsImgWrap, AboutContainer, AboutInfoWrap, AboutWrapper, BenefitsContainer, BenefitsDesc, BenefitsDescWrap, BenefitsInfoWrap, BenefitsTitle, BenefitsWrap, ChooseDesc, ChooseUsHeadingWrap, ChooseUsLinksWrap, ChooseUsWrap } from '../../styles/About'
import AboutImg from '../../assets/cars-img.png'
import { StepsHeading1, StepsHeading2,StepsInfoImg, StepsInfoImgWrap} from '../../styles/Steps'
import {HeroLinks} from '../../styles/Hero'
import AboutImg1 from '../../assets/about-1.png'
import AboutImg2 from '../../assets/about-2.png'
import AboutImg3 from '../../assets/about-3.png'

const About = () => {

    const steps = [
        {img : AboutImg1, title : "Cross Country Drive", desc : "Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures."},
        {img : AboutImg2, title : "All Inclusive Pricing", desc : "Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."},
        {img : AboutImg3, title : "No Hidden Charges", desc : "Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."},
    ]

  return (
    <AboutContainer id = "About">
        <AboutWrapper>
            <AboutCarsImgWrap>
                <AboutCarsImg src = {AboutImg} />
            </AboutCarsImgWrap>
            <AboutInfoWrap>
                <ChooseUsWrap>
                    <ChooseUsHeadingWrap>
                        <StepsHeading1>Why Choose Us</StepsHeading1>
                        <StepsHeading2>Best valued deals you will ever find</StepsHeading2>
                        <ChooseDesc> 
                            Discover the best deals you'll ever find with our unbeatable offers. 
                            We're dedicated to providing you with the best value for your money, 
                            so you can enjoy top-quality services and products without breaking the bank. 
                            Our deals are designed to give you the ultimate renting experience, 
                            so don't miss out on your chance to save big.
                        </ChooseDesc>
                        <ChooseUsLinksWrap>
                            <HeroLinks href = "#Home" book>Find Details</HeroLinks>
                        </ChooseUsLinksWrap>  
                    </ChooseUsHeadingWrap>
                </ChooseUsWrap>
                <BenefitsContainer>
                {steps.map((step) => (
                <BenefitsWrap>
                    <StepsInfoImgWrap>
                        <StepsInfoImg src = {step.img} />
                    </StepsInfoImgWrap>
                    <BenefitsInfoWrap>
                       <BenefitsTitle>{step.title}</BenefitsTitle>
                       <BenefitsDescWrap>
                            <BenefitsDesc>{step.desc}</BenefitsDesc>
                        </BenefitsDescWrap>
                    </BenefitsInfoWrap>
                </BenefitsWrap>
                ))}
            </BenefitsContainer>
            </AboutInfoWrap>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About