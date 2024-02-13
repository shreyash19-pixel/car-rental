import React, { useState} from 'react'
import { AuthenticationWrap, LogoWrap, NavBar, NavBarWrap, NavLinks, NavLinksWrap, SignUpWrap,Logo, Hamburger, ResponsiveNav, Cross } from '../../styles/Nav'
import CarRentalLogo from '../../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {

    const navLinks = [
        {title : "Home", link : "#Home"},
        {title : "About", link : "#About"},
        {title : "Vehicle Models", link : "#Models"},
        {title : "Testimonials", link : "#Testimonials"},
        {title : "Contact", link : "#Contact"},
    ]

    const [nav, setNav] = useState(false)
    nav?document.body.style.overflow="hidden":document.body.style.overflow="auto";

    const handleOverflow = () => {
        setNav(false)
    }

  return (
    <NavBarWrap>
        <NavBar>
            <LogoWrap>
                <Logo src = {CarRentalLogo} />
            </LogoWrap>
            <NavLinksWrap>
                {navLinks.map((links) => (
                <NavLinks onClick={handleOverflow} href = {links.link}>{links.title}</NavLinks>
                ))}
            </NavLinksWrap>
            <AuthenticationWrap>
                <SignUpWrap href = "#">
                    Sign In
                </SignUpWrap>
                <SignUpWrap  href = "#" register = "true">
                    Register
                </SignUpWrap>
            </AuthenticationWrap>
            <Hamburger onClick={() => setNav(!nav)}>
                <GiHamburgerMenu />
            </Hamburger>
            {nav && (<ResponsiveNav responsive = {nav}>
                {navLinks.map((links) => (
                    <NavLinks onClick={handleOverflow} href = {links.link}>{links.title}</NavLinks>
                    ))}
                <Cross onClick={() => setNav(!nav)}>
                    <RxCross2 />
                </Cross>
            </ResponsiveNav>)
            }
        </NavBar>
       
    </NavBarWrap>
  )
}

export default Nav