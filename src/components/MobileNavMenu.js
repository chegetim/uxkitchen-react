import React, { useEffect, useRef, useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { breakpoints } from "../utils/breakpoints"
import PropTypes from "prop-types"

import "./header.css"
import "./layout.css"

const MobileNavMenu = () => {
  /* */
  const [menuOpen, toggleMenuOpen] = useState(false)

  const [background, setBackground] = useState(false)
  const navRef = useRef()

  navRef.current = background
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <MenuBar background={background}>
      <Link to="/">
        <img src={require("../images/ux-kitchen-logo-white.png")} />
      </Link>
      <MenuIconContainer>
        <MenuIcon menuOpen={menuOpen} onClick={() => toggleMenuOpen(!menuOpen)}>
          <div />
          <div />
          <div />
        </MenuIcon>
      </MenuIconContainer>
      <MenuLinks menuOpen={menuOpen}>
        <Link to="/">Home</Link>
        <Link to="/corporates">Corporates</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="https://www.meetup.com/UX-Kichen" target="blank">
          <button>Community</button>
        </Link>
      </MenuLinks>
    </MenuBar>
  )
}

export default MobileNavMenu

const MenuBar = styled.header`
  @media ${breakpoints.lg} {
    display: none;
  }
  display: flex;
  position: fixed;
  height: 5rem;
  width: 100%;
  z-index: 10;
  padding: 1rem;
  background: ${({ background }) => (background ? "#dfa800" : "transparent")};
  /*backdrop-filter: blur(5px);*/
  justify-content: space-between;
  align-items: center;
  img {
    height: 5rem;
  }
`

const MenuIconContainer = styled.div`
  margin-top: -1em;
  margin-right: 2.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const MenuIcon = styled.div`
  cursor: pointer;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  outline: thin-dotted;
  z-index: 11;

  div {
    width: 2rem;
    height: 0.25rem;
    background: #fefefe;
    border-radius: 10px;
    transform-origin: 1px;

    :first-child {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
    }

    :nth-child(3) {
      transform: ${({ menuOpen }) =>
        menuOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #4a2c40;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  transition: transform 150ms;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};
  a {
    margin: -1rem 0 4rem -1.5rem;
    color: #fefefe;
  }
  button {
    margin-top: 0.5rem;
  }
`
