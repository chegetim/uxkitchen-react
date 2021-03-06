import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

const Corporates = props => (
  <Layout>
    <SEO title="Corporates" />
    <div className="HeaderCorporates"></div>
    <div className="BannerCorporates">
      <div className="BannerCorporatesGroup">
        <h2>
          Are you looking to have your product re-thought using UX principles,
          or UX masterclass for your team? Get in touch with us for more info.
        </h2>
        <Link to="/contact">
          <button>Get in Touch!</button>
        </Link>
      </div>
    </div>
  </Layout>
)

export default Corporates
