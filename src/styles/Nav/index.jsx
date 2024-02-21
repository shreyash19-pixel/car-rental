import styled from "styled-components";


export const NavBarWrap = styled.div`
    width: 100%;
    padding: 25px 30px;

    @media (max-width: 768px)
    {
        padding-inline: 15px;
    }
    
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99999;
`

export const LogoWrap = styled.div`

`

export const Logo = styled.img`
    width: 100%;
    max-width: 150px;

    @media (max-width: 480px)
    {
        max-width: 120px;
    }
`

export const NavLinksWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;

    @media (max-width: 1000px)
    {
        display: none;
    }
`

export const NavLinks = styled.a`
    color: black;
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;

    &:hover{
        color: #6C22A6;
        transition: all .4s ease-in-out;
    }

    @media (max-width: 1000px)
    {
        font-size: 20px;
        font-weight: 600;
    }
`

export const AuthenticationWrap = styled.div`
    display: flex;
    gap: 25px;
    align-items: center;

    @media (max-width: 1000px)
    {
        display: none;
    }
`

export const SignUpWrap = styled.a`
    text-decoration: none;
    background-color: ${(props) => (props.register ? "#6C22A6" : "transparent")};
    color: ${(props) => (props.register ? "white" : "black")};
    padding: ${(props) => (props.register ? "12px 30px" : "0px")};
    border-radius: ${(props) => (props.register ? "5px" : "0px")};
    font-weight: 500;
    box-shadow:  ${(props) => (props.register ? "0 10px 15px #c496e7;" : "none")}; 

    &:hover
    {
        box-shadow:  ${(props) => (props.register ? "0 10px 15px rgb(176, 93, 240);" : "none")}; 
        transition: all .5s ease;
    }
`

export const Hamburger = styled.div`
    display: none;

    @media (max-width: 1000px)
    {
        display: flex;
        font-size: 30px;
        cursor: pointer;
    }
`

export const Cross = styled.div`
    display: none;

    @media (max-width: 1000px)
    {
        display: flex;
        font-size: 30px;
        cursor: pointer;
        position: absolute;
        z-index: 4;
        right: 20px;
        top: 40px;
    }
`

export const ResponsiveNav = styled.div`
    display: none;

    @media (max-width: 1000px)
    {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 60px;
        background-color: white;
        position: absolute;
        top: 0;
        left:0px;
        animation : left .4s ease-out;
        font-size: 22px;
        z-index: 99999;

        @keyframes left {
        from {
            transform: translate(-100%);
        }
        to {
            transform: translate(0);
        }
        }
    }
`

export const HeroBackgroundImgWrap = styled.div`
    position: absolute;
    right: 0px;
    top:0px;
    z-index:  0;

    @media (max-width: 800px)
    {
        display: none;
    }
`

export const HeroBackgroundImg = styled.img`
    
`