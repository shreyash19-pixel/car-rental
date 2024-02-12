import React from 'react'
import {ReviewsWrap, PersonImg, PersonImgAndNameWrap, PersonImgWrap, PersonLoc, PersonName, PersonNameWrap, ReviewsCard, TestimonialContainer, TestimonialWrap, PersonReviews, DoubleQuotes, PersonInfoWrap } from '../../styles/Testimonial'
import { StepsHeading1, StepsHeading2, StepsHeadingWrap, StepsInfoDesc } from '../../styles/Steps'
import { ModelsHeadingDescWrap } from '../../styles/Models'
import TestimonialImg1 from '../../assets/testimonial-1.jpg'
import TestimonialImg2 from '../../assets/testimonial-2.jpg'
import { RiDoubleQuotesR } from "react-icons/ri";

const Testimonial = () => {

    const testimonial = [
        {img : TestimonialImg1, name : "Parry Hotter", loc : "Belgrade", desc : "We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "},
        {img : TestimonialImg2, name : "Ron Rizzly", loc : "Novi Sad", desc : "The car was in great condition and made our trip even better. Highly recommend for this car rental website! "}
    ]

  return (
    <TestimonialContainer id = "Testimonials">
        <TestimonialWrap>
            <StepsHeadingWrap>
                <StepsHeading1>Reviewed by People</StepsHeading1>
                <StepsHeading2>Client's Testimonials</StepsHeading2>
                <ModelsHeadingDescWrap>
                    <StepsInfoDesc>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</StepsInfoDesc>
                </ModelsHeadingDescWrap>
            </StepsHeadingWrap>
            <ReviewsWrap>
                {testimonial.map((test) => (
                <ReviewsCard>
                    <PersonReviews>
                         {test.desc}
                    </PersonReviews>
                <PersonInfoWrap>
                    <PersonImgAndNameWrap>
                        <PersonImgWrap>
                            <PersonImg src = {test.img} />
                        </PersonImgWrap>
                        <PersonNameWrap>
                            <PersonName>{test.name}</PersonName>
                            <PersonLoc>{test.loc}</PersonLoc>
                        </PersonNameWrap>
                       
                    </PersonImgAndNameWrap>
                    <DoubleQuotes>
                            <RiDoubleQuotesR />
                        </DoubleQuotes>
                </PersonInfoWrap>
                </ReviewsCard>
                ))}
            </ReviewsWrap>
        </TestimonialWrap>
    </TestimonialContainer>
  )
}

export default Testimonial