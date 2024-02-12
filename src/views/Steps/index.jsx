import React, {useState, useEffect} from 'react'
import { StepsContainer, StepsHeading1, StepsHeading2, StepsHeadingWrap, StepsInfoContainer, StepsInfoDesc, StepsInfoDescTitle, StepsInfoDescWrap, StepsInfoImg, StepsInfoImgWrap, StepsInfoWrap, StepsWrap, StyledNavigator } from '../../styles/Steps'
import Step1 from '../../assets/steps-1.png'
import Step2 from '../../assets/steps-2.png'
import Step3 from '../../assets/steps-3.png'
import { IoArrowUp } from "react-icons/io5";

const Steps = () => {

    const steps = [
        {img : Step1, title : "Select Car", desc : "We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"},
        {img : Step2, title : "Contact Operator", desc : "Our knowledgeable and friendly operators are always ready to help with any questions or concerns"},
        {img : Step3, title : "Let's Drive", desc : "Whether you're hitting the open road, we've got you covered with our wide range of cars"},
    ]

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Change 200 to your desired scroll position
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
    

  return (
    <StepsContainer>
        <StepsWrap>
            <StepsHeadingWrap>
                <StepsHeading1>Plan your trip now</StepsHeading1>
                <StepsHeading2>Quick & easy car rental</StepsHeading2>
            </StepsHeadingWrap>
            <StepsInfoWrap>
                {steps.map((step) => (
                <StepsInfoContainer>
                    <StepsInfoImgWrap>
                        <StepsInfoImg src = {step.img} />
                    </StepsInfoImgWrap>
                    <StepsInfoDescWrap>
                        <StepsInfoDescTitle>
                            {step.title}
                        </StepsInfoDescTitle>
                        <StepsInfoDesc>
                            {step.desc}
                        </StepsInfoDesc>
                    </StepsInfoDescWrap>
                </StepsInfoContainer>
                ))}
            </StepsInfoWrap>
        </StepsWrap>
        <StyledNavigator isVisible={isVisible} onClick={scrollToTop}>
            <IoArrowUp />
        </StyledNavigator>
    </StepsContainer>
  )
}

export default Steps