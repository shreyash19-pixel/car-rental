import styled from "styled-components";

export const FAQContainer = styled.div`
    width: 100%;
    padding: 90px;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px)
    {
        padding-inline: 60px;
    }

    @media (max-width: 520px)
    {
        padding-inline: 30px;
    }
`

export const FAQWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const FAQQuestionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FAQQuestionWrap = styled.div`
    width: 100%;
    max-width: 800px;
    box-shadow: 0 10px 20px 0 rgba(0,0,0,.1);
`

export const QuestionWrap = styled.div`
    width: 100%;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    box-shadow: ${(props) => (props.isActive ? "0 10px 15px #c496e7" : "none")};
    background-color: ${(props) => (props.isActive ? "#6C22A6" : "white")};
    color : ${(props) => (props.isActive ? "white" : "black")};
`

export const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f0eded;
    cursor: pointer;
`

export const Questions = styled.p`
    font-size: 20px;
    font-weight: 500;

    @media (max-width: 520px)
    {
       font-size: 16px;
    }
`

export const ShowAns = styled.div`
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: pointer;
  transform: ${(props) => (props.isActive ? "rotate(180deg)" : "rotate(0deg)")};
  animation: transform .4s ease;

  @media (max-width: 520px) {
    font-size: 16px;
  }
`;


export const AnsWrap = styled.div`
    width: 100%;
    padding: ${(props) => (props.isActive ? '15px 40px' : '0px')}; /* Add padding only when active */
    color: grey;
    font-size: 14px;
    transition: max-height 0.4s ease, padding 0.4s ease; /* Add transition for smooth animation */
    max-height: ${(props) => (props.isActive ? '500px' : '0px')}; /* Adjust height accordingly */
    overflow: hidden;
`;
export const FaqImgWrap = styled.div`
    position: absolute;
    right:-90px;
    top: 250px;   
    z-index: -1;

    @media (max-width: 768px)
    {
        top: 300px;
    }
`

export const FaqImg = styled.img`
    width: 100%;
    max-width: 450px;
    height: auto;

    @media (max-width: 500px)
    {
        max-width: 300px;
    }
`

