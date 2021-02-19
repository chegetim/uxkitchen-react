import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import MobileNavMenu from "./MobileNavMenu.js"
import { breakpoints } from "../utils/breakpoints.js"

import "./header.css"
import "./layout.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false,
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <>
        <StyledHeader>
          <header
            className={
              this.state.hasScrolled ? "Header HeaderScrolled" : "Header"
            }
          >
            <div className="HeaderGroup">
              <Link to="/">
                <img src={require("../images/ux-kitchen-logo-white.png")} />
              </Link>
              <Link to="/corporates">Corporates</Link>
              <Link to="/contact">Contact Us</Link>
              <a href="https://www.meetup.com/UX-Kichen" target="_blank">
                <button>Community</button>
              </a>
            </div>
          </header>
        </StyledHeader>
        <MobileNavMenu />
      </>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const StyledHeader = styled.header`
  display: none;
  @media ${breakpoints.lg} {
    display: flex;
  }
`
