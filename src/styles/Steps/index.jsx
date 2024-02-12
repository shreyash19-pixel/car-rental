import styled from "styled-components";

export const StepsContainer = styled.div`
    width: 100%;
    padding: 90px 120px;

    @media (max-width: 768px)
    {
        padding-inline: 15px;
    }
`

export const StepsWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const StepsHeadingWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 25px;
`

export const StepsHeading1 = styled.h2`
       @media (max-width: 420px)
        {
            font-size: 20px;;
        }
`

export const StepsHeading2 = styled.h2`
    font-size: 45px;
    @media (max-width: 420px)
        {
            font-size: 30px;;
        }
`

export const StepsInfoWrap = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;

    @media (max-width: 1021px)
    {
        grid-template-columns: 1fr 1fr;
        row-gap: 32px;
    }

    @media (max-width: 800px)
    {
        grid-template-columns: 1fr;
    }
`

export const StepsInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`

export const StepsInfoImgWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const StepsInfoImg = styled.img`

`

export const StepsInfoDescWrap = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

export const StepsInfoDescTitle = styled.h2`
    text-align: center;
`


export const StepsInfoDesc = styled.p`
    color: grey;
    text-align: center;
`

export const StyledNavigator = styled.div`
 position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #6C22A6;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  opacity: ${props => props.isVisible ? '1' : '0'};
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  transition: opacity 0.3s ease-in-out;
  font-size: 20px;
`;