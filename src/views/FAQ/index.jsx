import React, { useState } from 'react';
import { AnsWrap, FAQContainer, FAQQuestionContainer, FAQQuestionWrap, FAQWrap, FaqImg, FaqImgWrap, QuestionContainer, QuestionWrap, Questions, ShowAns } from '../../styles/FAQ';
import { StepsHeading1, StepsHeading2, StepsHeadingWrap, StepsInfoDesc } from '../../styles/Steps';
import { ModelsHeadingDescWrap } from '../../styles/Models';
import { FaAngleDown } from "react-icons/fa6";
import MiniCooperImg from '../../assets/faq-img.png'

const FAQ = () => {

    const faq = [
        { questions: "1. What is special about comparing rental car deals?", answers: "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies." },
        { questions: "2. How do I find the car rental deals?", answers: "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions." },
        { questions: "3. How do I find such low rental car prices?", answers: "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices." }
    ]

    const [activeFaq, setActiveFaq] = useState(0)

    const handleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    }

    return (
        <FAQContainer>
            <FAQWrap>
                <StepsHeadingWrap>
                    <StepsHeading1>FAQ</StepsHeading1>
                    <StepsHeading2>Frequently Asked Questions</StepsHeading2>
                    <ModelsHeadingDescWrap>
                        <StepsInfoDesc>
                            Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.
                    </StepsInfoDesc>
                    </ModelsHeadingDescWrap>
                </StepsHeadingWrap>
                <FAQQuestionContainer>
                    <FAQQuestionWrap>
                        {faq.map((ques, index) => (
                            <QuestionContainer key={index}>
                                <QuestionWrap isActive={activeFaq === index} onClick={() => handleFaq(index)}>
                                    <Questions>{ques.questions}</Questions>
                                    <ShowAns isActive={activeFaq === index}>
                                        <FaAngleDown />
                                    </ShowAns>
                                </QuestionWrap>
                                <AnsWrap isActive={activeFaq === index}>
                                    {activeFaq === index &&  ques.answers}
                                </AnsWrap>
                            </QuestionContainer>
                        ))}
                    </FAQQuestionWrap>
                </FAQQuestionContainer>
            </FAQWrap>
            <FaqImgWrap>
                <FaqImg src = {MiniCooperImg} />
            </FaqImgWrap>
        </FAQContainer>
    )
}

export default FAQ;
