import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="UX Kitchen KE" />
    <div className="Banner">
      <div className="BannerGroup">
        <h1>Less bs, more UX</h1>
        <p>Helping entrepreneurs and professionals learn to build products that are useful, usable, and desirable through UX.</p>
        <Link to="https://www.meetup.com/UX-Kichen" target="blank"><button>Join the Community</button></Link>
      </div>
    </div>
    <div className="Logos">
      <Link className="LogoGroup" to="https://www.meetup.com/UX-Kichen">
        <img src={require('../images/meetup-logo.png')} />
        <p>We meet once a month</p>
      </Link>
      <Link className="LogoGroup" to="https://medium.com/@uxkitchenke">
        <img src={require('../images/medium-logo.png')} />
        <p>Worth checking out</p>
      </Link>
      <Link className="LogoGroup" to="https://join.slack.com/t/ux-kitchen/shared_invite/zt-eqq3hd4x-EN0MCKTdpc_PShx~aJUilQ">
        <img src={require('../images/slack-logo.png')} />
        <p>Our growing chat room</p>
      </Link>
      <Link className="LogoGroup" to="https://twitter.com/uxkitchenke">
        <img src={require('../images/twitter-logo.png')} />
        <p>There's not much here</p>
      </Link>
    </div>
    <div className="Cards">
      <div className="BurgundyCard">
        <Card />
      </div>
      <div className="MustardCard">
        <Card />
      </div>
    </div>
  </Layout>
)

export default IndexPage
