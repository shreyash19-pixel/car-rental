import styled from "styled-components";


export const TestimonialContainer = styled.div`
    width: 100%;
    padding: 90px 110px;
    background-color: #F8F8F8;

    @media (max-width: 1000px)
    {
        padding-inline: 80px;
    }

    @media (max-width: 600px)
    {
        padding-inline: 25px;
    }
`

export const TestimonialWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 90px;
`

export const ReviewsWrap = styled.div`
    width: 100%;
    display: flex;
    gap: 30px;

    @media (max-width: 900px)
    {
        flex-direction: column;
    }
`

export const ReviewsCard = styled.div`
    width: 100%;
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    background-color: white;
    box-shadow: 0 20px 40px 0 rgba(0,0,0,.08);

    @media (max-width: 600px)
    {
        padding: 30px;
    }
`

export const PersonInfoWrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 15px;
`

export const PersonReviews = styled.h2`
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 600px)
    {
        font-size: 18px;
    }

    @media (max-width: 400px)
    {
        font-size: 15px;
    }
`

export const PersonImgAndNameWrap = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;

    @media (max-width: 600px)
    {
        gap: 10px;
    }
`

export const PersonImgWrap = styled.div`
    display: flex;
    align-items: center;
`

export const PersonImg = styled.img`
    width: 100%;
    max-width: 70px;
    border-radius: 50%;

    @media (max-width: 600px)
    {
        max-width: 50px;
    }
`

export const PersonNameWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`

export const PersonName = styled.h3`
    
    @media (max-width: 400px)
    {
        font-size: 14px;
    }
`
export const PersonLoc = styled.h4`
    font-weight: 400;

    @media (max-width: 400px)
    {
        font-size: 12px;
    }
`

export const DoubleQuotes = styled.div`
    color: #6C22A6;
    font-size: 50px;
    display: flex;
    align-items: center;

    @media (max-width: 600px)
    {
        font-size: 25px;
    }
`