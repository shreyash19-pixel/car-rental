import React from 'react'
import { FooterButtonWrap, FooterContainer, FooterContent1, FooterContent1Heading, FooterContent1HeadingSpan, FooterContent2, FooterContent2Heading, FooterLinks, FooterLinksWrap, FooterWrap, NumberWrap } from '../../styles/Footer'
import { ChooseDesc } from '../../styles/About'
import { FiPhoneCall } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa";
import { NameInput} from '../../styles/Reservation';
import { SearchBtn } from '../../styles/Booking';

const Footer = () => {
  return (
    <FooterContainer id = "Contact">
        <FooterWrap>
            <FooterContent1>
                <FooterContent1Heading>CAR <FooterContent1HeadingSpan>Rental</FooterContent1HeadingSpan></FooterContent1Heading>
                <ChooseDesc>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</ChooseDesc>
                <NumberWrap>
                    <FiPhoneCall />
                    (123)-456-789
                </NumberWrap>
                <NumberWrap>
                    <FaRegEnvelope />
                    carrental@gmail.com
                </NumberWrap>
            </FooterContent1>
            <FooterContent2>
                <FooterContent2Heading>
                    COMPANY
                </FooterContent2Heading>
                <FooterLinksWrap>
                    <FooterLinks href = "#">
                        New York
                    </FooterLinks>
                    <FooterLinks href = "#">
                        Careers
                    </FooterLinks>
                    <FooterLinks href = "#">
                        Mobile
                    </FooterLinks>
                    <FooterLinks href = "#">
                        Blog
                    </FooterLinks>
                    <FooterLinks href = "#">
                        How we work
                    </FooterLinks>
                </FooterLinksWrap>
            </FooterContent2>
            <FooterContent2>
                <FooterContent2Heading>
                WORKING HOURS
                </FooterContent2Heading>
                <FooterLinksWrap>
                    <FooterLinks>
                    Mon - Fri: 9:00AM - 9:00PM
                    </FooterLinks>
                    <FooterLinks>
                    Sat: 9:00AM - 19:00PM
                    </FooterLinks>
                    <FooterLinks>
                    Sun: Closed
                    </FooterLinks>
                </FooterLinksWrap>
            </FooterContent2>
            <FooterContent2>
                <FooterContent2Heading>
                SUBSCRIPTION
                </FooterContent2Heading>
                <FooterLinksWrap>
                    <FooterLinks>
                    Subscribe your Email address for latest news & updates.
                    </FooterLinks>
                </FooterLinksWrap>
                <FooterButtonWrap>
                    <NameInput placeholder='Enter Email Address' />
                    <SearchBtn>Submit</SearchBtn>
                </FooterButtonWrap>
            </FooterContent2>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer