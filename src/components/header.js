import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="Header">
      <div className="HeaderGroup">
        <Link to="/"><img src={require('../images/ux-kitchen-logo-white.png')} /></Link>
        <Link to="/corporates">Corporates</Link>
        <Link to="/contact-us">Contact Us</Link> 
        <Link to="https://www.meetup.com/UX-Kichen" target="blank"><button>Community</button></Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
