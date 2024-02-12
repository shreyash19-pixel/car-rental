import styled from "styled-components";


export const FooterContainer = styled.div`
    width: 100%;
    padding: 90px 40px;
`

export const FooterWrap = styled.div`
    width: 100%;
    display: grid;
    gap: 35px;
    grid-template-columns: 27fr 21fr 23fr 21fr;

    @media (max-width: 1100px)
    {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 650px)
    {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 90px;
    }
`

export const FooterContent1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 650px)
    {
        align-items: center;
    }
`

export const FooterContent1Heading = styled.h2`
    
`

export const FooterContent1HeadingSpan = styled.span`
    font-weight: 400;
`

export const NumberWrap = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    font-size: 18px;
    font-weight: 600;
`

export const FooterContent2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const FooterContent2Heading = styled.h2`
    font-size: 24px;
`

export const FooterLinksWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const FooterLinks = styled.a`
    text-decoration: none;
    color: black;

    &:hover{
        color: #7200c9;
    }
`

export const FooterButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`