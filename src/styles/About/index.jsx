import styled from "styled-components";

export const AboutContainer = styled.div`
    width: 100%;
    padding: 90px 80px;

    @media (max-width: 1000px)
    {
        padding-inline: 30px;
    }
`

export const AboutWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const AboutCarsImgWrap = styled.div`

`

export const AboutCarsImg = styled.img`
    width: 100%;
`

export const AboutInfoWrap = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 1000px)
    {
        flex-direction: column;
        text-align: center;
        align-items: center;
        gap: 70px;
    }
`

export const ChooseUsWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ChooseUsHeadingWrap = styled.div`
    width: 100%;
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 1000px)
    {
        max-width: 1000px;
    }
`

export const ChooseUsLinksWrap = styled.div`
    display: flex;

    @media (max-width: 1000px)
    {
        justify-content: center;
        align-items: center;
    }
`

export const ChooseDesc = styled.p`
    color: grey;
    font-size: 15px;

    @media (max-width: 420px)
    {
        font-size: 12px;
    }
`

export const BenefitsContainer = styled.div`
      width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`

export const BenefitsWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 15px;

    @media (max-width: 550px)
    {
        flex-direction: column;
    }
`
export const BenefitsInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 550px)
    {
        align-items: center;
    }

   
`

export const BenefitsTitle = styled.h2`
    
`

export const BenefitsDescWrap = styled.div`
    width: 100%;
    max-width: 300px;
   
`

export const BenefitsDesc = styled.p`
    color: grey;
`