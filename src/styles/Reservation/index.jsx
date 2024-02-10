import styled from "styled-components";

export const ReservationContainer = styled.div`
    width: 100%;
    max-width: 800px;
    height: 100vh;
    height: 100dvh;
    z-index: 99;
    position: fixed;
    top: 54%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 2px solid white; 
    overflow-y: scroll;
    background-color: white;

    @media (max-width: 800px)
    {
        top: 50%;
    }
`

export const ReservationWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const ReservationHeadingWrap = styled.div`
    background-color: #6C22A6;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
`

export const ReservationHeading = styled.div`
    color: white;
    font-weight: 600;
    font-size: 25px;

    @media (max-width: 480px)
    {
        font-size: 18px;
    }
`
export const CrossWrap = styled.div`
    color: white;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;
`
export const GuideLinesWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px 30px;
    gap: 12px;
    background-color: #e4c5fa;
`

export const GuidelinesHeading = styled.h2`
    font-size: 20px;
    color : #6C22A6;

    @media (max-width: 520px)
    {
        font-size: 15px;
    }
    
`

export const GuideLinesDes = styled.p`
    color: grey;
    font-weight: 500;

    @media (max-width: 520px)
    {
        font-size: 13px;
    }
`

export const ExistingInfoWrap = styled.div`
    padding: 25px;
    display: flex;
    gap: 15px;
    border-bottom: 1px solid grey;

    @media (max-width: 650px)
    {
        flex-direction: column;
    }
`

export const ExistingInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ExistingInfoHeading = styled.h3`
    color : #6C22A6;
`

export const ReservationDetailsWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const ReservationDetails = styled.div`
    display: flex;
    gap: 10px;
`

export const LocationIconWrap = styled.div`
    font-size: 20px;
`
export const PickLocWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`

export const PickLocHeadingWrap = styled.div`
    font-weight: 600;
`

export const PickLoc = styled.div`
    display: flex;
    color: grey;
    gap: 6px;
`

export const PickTime = styled.input`
    padding-inline: 7px;
`

export const CarInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 650px)
    {
        text-align: center;
    }
`

export const CarInfoHeading = styled.h2`
    font-size: 20px;
`

export const CarInfoHeadingSpan = styled.span`
    color : #6C22A6;
`
export const SelectedCarWrap = styled.div`
    
`

export const SelectedCarImg = styled.img`
    width: 100%;
    height: auto;
`

export const PersonalInfoContainer = styled.div`
    width: 100%;
    padding: 20px;
`

export const PersonalInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const PersonalInfoHeading = styled.h3`
    color : #6C22A6;
`

export const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const UsersNameInfoWrap = styled.div`
    display: grid;
    grid-gap: 22px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;

    @media (max-width: 650px)
    {
        grid-template-columns: 1fr;
    }
`

export const NameWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const NameLabel = styled.label`
    color: grey;
    font-weight: 500;
    font-size: 16px;

    &::after{
        content: "*";
        color: red;
    }
`

export const NameInput = styled.input`
    background-color: #dfdede;
    border: none;
    outline: none;
    padding: 15px;
    font-size: 15px;
`

export const EmailDetailsWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

export const UpdatesWrap = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    color: #797979;
`

export const CheckInput = styled.input`

`

export const ReserveNowWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #dfdede;
    min-height: 130px;
    padding-inline: 40px;

    @media (max-width: 650px)
    {
        justify-content: center;
    }
`

export const ReserveNowBtn = styled.div`
    background-color: #6C22A6;
    color: white;
    font-weight: 500;
    padding: 10px 30px;
    cursor: pointer;
    border: 1px solid yellow;
    font-size: 22px;
`