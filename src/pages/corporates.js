import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const Corporates = props => (
  <Layout>
    <div className="HeaderCorporates"></div>
    <div className="BannerCorporates">
      <div className="BannerCorporatesGroup">
        <h1>Coming soon...</h1>
        <p>Are you looking to have your product re-thought using UX principles, or UX masterclass for your team? Get in touch with us for more info.</p>
        <Link to="/contact-us"><button>Get in Touch!</button></Link>
      </div>
    </div>
</Layout>
)

export default Corporates