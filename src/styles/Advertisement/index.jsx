import styled from "styled-components";


export const AdvContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 15px;
    background-color: #2D2D2D;
    padding: 50px 20px;
`

export const AdvHeading1 = styled.h1`
    font-size: 54px;
    color: white;

    @media (max-width: 768px)
    {
        font-size: 40px;
    }

    @media (max-width: 420px)
    {
        font-size: 30px;
    }
`

export const AdvHeading2 = styled.h2`
    color: white;
    font-weight: 400;
    font-size: 26px;

    @media (max-width: 768px)
    {
        font-size: 20px;
    }

    @media (max-width: 420px)
    {
        font-size: 18px;
    }
`

export const AdvHeading2Span = styled.span`
    color: #b14cfd;
`