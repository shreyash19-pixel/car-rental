import styled from "styled-components";
import BookingImg from '../../assets/booking-back-img.png'

export const BookingContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 35px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 4;
    @media (max-width: 460px)
    {
        padding-inline: 25px;
    }

    @media (max-width: 368px)
    {
        padding-inline: 15px;
    }
`

export const BookingWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 50px;
    background-image: url(${BookingImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
    background-color: #fff;

    @media (max-width: 460px)
    {
        padding-inline: 25px;
    }

    @media (max-width: 368px)
    {
        padding-inline: 15px;
    }
`

export const BookingHeading = styled.h1`
    
`

export const WarningMessageWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: ${(props) => (props.green ? "#C3FABE" : "#F8D7DA")};
    border-radius: 5px;
`
export const WarningMessage = styled.div`
    color: ${(props) => (props.green ? "#2A6817" : "rgb(114,28,36)")};
`

export const CrossWrap = styled.div`
    color: ${(props) => (props.green ? "#2A6817" : "rgb(114,28,36)")};
    cursor: pointer;
`



export const BookingInfoWrap = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 26px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;

    @media (max-width: 1000px)
    {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 630px)
    {
        grid-template-columns: 1fr;
    }
`

export const CarTypeWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const CarTypeHeadingWrap = styled.div`
    display: flex;
    gap: 10px;
    font-weight: 600;
    display: flex;
    align-items: center;

    &::after{
        content: "*";
        color: red;
    }
`

export const CarIconWrap = styled.div`
    font-size: 22px;
    display: flex;
    align-items: center;
`

export const CarTypeSelect = styled.select`
    outline: none;
    padding: 10px 20px;
    color: #ABAEC1;
    border: 1px solid #ABAEC1;
    font-size: 16px;

    @media (max-width: 368px)
    {
        padding-inline: 10px;
    }
`

export const CarTypeOption = styled.option`
    
`

export const SearchBtnWrap = styled.div`
    display: flex;
    align-items: flex-end;
`

export const SearchBtn = styled.div`
    width: 100%;
    color: white;
    background-color: #6C22A6;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    font-size: 18px;
    box-shadow: 0 10px 15px #c496e7;
    cursor: pointer;

    &:hover
    {
        box-shadow: 0 10px 15px rgb(176, 93, 240);
        transition: all .5s ease;
    }
`

export const DateInput = styled.input`
    outline: none;
    padding: 10px 20px;
    color: #ABAEC1;
    border: 1px solid #ABAEC1;
    font-size: 16px;
    width: 100%;
`