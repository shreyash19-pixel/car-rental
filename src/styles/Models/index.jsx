import styled from "styled-components";


export const ModelsContainer = styled.div`
    width: 100%;
    padding: 90px 40px;

    @media (max-width: 520px)
    {
        padding-inline: 20px;
    }
`

export const ModelsWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`
export const ModelsHeadingDescWrap = styled.div`
    width: 100%;
    max-width: 650px;
`

export const ViewCarsWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 16px;

    @media (max-width: 1050px)
    {
        flex-direction: column;
        gap: 70px;
    }
`

export const ModelsNameWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const ModelsName = styled.div`
    padding: 15px 20px;
    background-color: ${(props) => (props.isActive ? "#6C22A6" : "#E9E9E9")};
    color:  ${(props) => (props.isActive ? "white" : "black")};;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    &:hover {
        background-color: #6C22A6;
        color: white;
    } 
`;

export const ModelImgAndDetailsWrap = styled.div`
    display: flex;
    gap: 176px;
    justify-content: space-between;

    @media (max-width: 1200px)
    {
        gap: 32px;
    }
    @media (max-width: 700px)
    {
        flex-direction: column;
        gap: 90px;
    }
`

export const ModelImgWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

`

export const ModelImg = styled.img`
    width: 100%;
`

export const ModelsDetailsWrap = styled.div`
    width: 100%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    @media (max-width: 700px)
    {
        max-width: 700px;
        align-items: center;
    }
`

export const ModelsDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (max-width: 700px)
    {
        max-width: 400px;
    }
   
`
export const ModelsDetailsHeading = styled.div`
    background-color: #6C22A6;
    padding: 5px 15px;
    text-align: center;
    color: white;
    font-size: 18px;
`

export const ModelsDetailsHeadingSpan = styled.span`
    color: white;
    font-size: 27px;
    font-weight: 600;
`
export const CarAllInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid grey;
`
export const CarInfoContainer = styled.div`
    display: flex;
    padding: 10px 15px;
    border-top: 2px solid grey;
`

export const CarInfo1 = styled.div`
    width: 100%;
    text-align: center;
    font-size: 14px;
`

export const CarInfo2 = styled(CarInfo1)`
    border-left: 2px solid grey;
`

export const ReserveNow = styled.a`
    text-decoration: none;
    width: 100%;
    background-color: #6C22A6;
    color: white;
    font-weight: 600;
    font-size: 20px;
    padding: 10px 15px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 10px 15px #c496e7;

    &:hover
    {
        box-shadow: 0 10px 15px rgb(176, 93, 240);
        transition: all .5s ease;
    }

    @media (max-width: 700px)
    {
        max-width: 400px;
    }
`