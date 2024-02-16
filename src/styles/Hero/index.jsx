import styled from "styled-components";

export const HeroContainer = styled.div`
    width: 100%;
    height: 80vh;
    padding: 45px 35px;
`

export const HeroWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 15px;
    position: relative;
`

export const HeroInfoWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    z-index: 3;

    @media (max-width: 800px)
    {
        align-items: center;
        text-align: center;
    }
`

export const PlanTrip = styled.h3`

`

export const HeroHeadingWrap = styled.div`
    width: 100%;
    max-width: 500px;
`

export const HeroHeading = styled.h1`
    font-size: 55px;
    line-height: 1;

    @media (max-width: 480px)
    {
       font-size: 40px;
    }

    @media (max-width: 375px)
    {
        font-size: 35px;
    }
`

export const HeroHeadingSpan = styled.span`
    color: #6C22A6;
`

export const HeroDescWrap = styled.div`
    width: 100%;
    max-width: 520px;
`

export const HeroDesc = styled.p`
    color: #706F7B;

    @media (max-width: 375px)
    {
        font-size: 13px;
    }
`

export const HeroLinksWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    min-height: 100px;

    @media (max-width: 450px)
    {
        flex-direction: column;
        width: 100%;
    }
`

export const HeroLinks = styled.a`
    background-color: ${(props) => (props.book ? "#6C22A6" : "black")};
    color: white;
    font-weight: 500;
    text-decoration: none;
    padding: 20px 35px;
    border-radius: 5px;
    font-size: 18px;
    box-shadow:  ${(props) => (props.book ? "0 10px 15px #c496e7;" : "none")}; 

    &:hover{
        background-color: ${(props) => (props.book ? "0 10px 15px #6C22A6" : "transparent")}; 
        color: ${(props) => (props.book ? "white" : "black")};
        border: ${(props) => (props.book ? "none" : "1px solid black")};
        box-shadow:  ${(props) => (props.book ? "0 10px 15px rgb(176, 93, 240);" : "none")}; 
        transition: all .5s ease;
    }

    @media (max-width: 450px)
    {
        width: 100%;
        max-width: 230px;
    }

    @media (max-width: 420px)
    {
       font-size: 14px;
       padding: 16px 30px;
    }
`

export const HeroImgContainer = styled.div`
    width: 65%;
    height: 100%;
    position: absolute;
    z-index: 2;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px)
    {
        display: none;
    }
`

export const HeroImgWrap = styled.div`
    
`

export const HeroImg = styled.img`
    width: 100%;
`

