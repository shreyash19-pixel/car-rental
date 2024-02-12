import styled from "styled-components";



export const MobileContainer = styled.div`
    width: 100%;
    padding-block: 80px;
    padding-inline: 40px;
    background-color: #F8F8F8;

    @media (max-width: 768px)
    {
       padding-inline: 20px;
    }
`

export const MobileWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 15px;

    @media (max-width: 768px)
    {
        flex-direction: column-reverse;
        gap: 30px;
    }
`

export const MobileInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 45px;

    @media (max-width: 768px)
    {
        text-align: center;
        align-items: center;
    }
`

export const MobileStoreImgContainer = styled.div`
    display: flex;
    gap: 40px;

     @media (max-width: 500px)
    {
       flex-direction: column;
    }
`

export const MobileStoreImgWrap = styled.div`
    display: flex;
    align-items: center;
   
`

export const MobileStoreImg = styled.img`
    width: 100%;
    max-width: 300px;

      @media (max-width: 450px)
    {
       max-width: 150px;
    }
`

export const MobileAppImgContainer = styled.div`
       width: 100%;

`

export const MobileAppImgWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`   

export const MobileAppImg = styled.img`
    width: 100%;
    max-width: 250px;
`


