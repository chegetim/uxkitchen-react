import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import "./header.css"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  render() {
    return (
      <header className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src={require('../images/ux-kitchen-logo-white.png')} /></Link>
          <Link to="/corporates">Corporates</Link>
          <Link to="/contact-us">Contact Us</Link> 
          <Link to="https://www.meetup.com/UX-Kichen" target="blank"><button>Community</button></Link>
        </div>
      </header>
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
