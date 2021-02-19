import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"
import Card from "../components/Card.js"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="Banner">
      <div className="BannerGroup">
        <h1>Less bs, more UX</h1>
        <p>
          Helping entrepreneurs and professionals learn to build products that
          are useful, usable, desirable, and ultimately adoptable through good
          UX.
        </p>
        <a href="https://www.meetup.com/UX-Kichen" target="_blank">
          <button>Join the Community</button>
        </a>
      </div>
    </div>
    <div className="Logos">
      <a
        className="LogoGroup"
        href="https://www.meetup.com/UX-Kichen"
        target="_blank"
      >
        <img src={require("../images/meetup-logo.png")} />
        <p>We meet once a month</p>
      </a>
      <a
        className="LogoGroup"
        href="https://medium.com/@uxkitchenke"
        target="_blank"
      >
        <img src={require("../images/medium-logo.png")} />
        <p>Worth checking out</p>
      </a>
      <a
        className="LogoGroup"
        href="https://join.slack.com/t/ux-kitchen/shared_invite/zt-krjpmtk6-z9mVgNjwmpwwiDyivuFjKQ"
        target="_blank"
      >
        <img src={require("../images/slack-logo.png")} />
        <p>Our growing chat room</p>
      </a>
      <a
        className="LogoGroup"
        href="https://twitter.com/uxkitchenke"
        target="_blank"
      >
        <img src={require("../images/twitter-logo.png")} />
        <p>Stay updated</p>
      </a>
    </div>
    <div className="Cards">
      <div className="BurgundyCard">
        <Card text="Here, we care deeply about the challenge." />
      </div>
      <div className="MustardCard">
        <Card text="Then, we take ice coffee & get things done." />
      </div>
    </div>
    <div className="ProductLanguage">
      <h2>Product language that we bash</h2>
      <div className="ProductLanguageText">
        <p>
          "This is the idea,can't you just design it? Research will take
          time..."
        </p>
        <p>
          "Add this paragragh, the more the content the more its
          understandable..."
        </p>
        <p>
          "So you're a product designer? Please make this pop. Give it some
          joos..."
        </p>
        <p>
          "I know what the user wants, no need for testing, just launch the
          app..."
        </p>
        <p>
          "Just follow the manager's instruction, your design process seems like
          you're over complicating the matter..."
        </p>
        <p>"Let's do freemium, we'll figure out the financials later..."</p>
        <p>
          "OMG just thought of something really cool. Add this feature, I
          promise its the next big thing..."
        </p>
        <p>"Trust me, its a simple idea.. just uber but for cocktails..."</p>
        <p>
          "We only have a budget for developers, we don't need a designer quite
          yet...ˀ"
        </p>
      </div>
    </div>
    <div className="AreYouInNeed">
      <h2>Are you a company & you need...</h2>
      <div className="AreYouInNeedText">
        <p>A product re-thought using UX principles?</p>
        <p>A UX masterclass for your team maybe?</p>
      </div>
      <Link to="/contact">
        <button>Let UX Kitchen save your day</button>
      </Link>
    </div>
    <div className="Partners">
      <h3 className="PartnerGroup">Partners:</h3>
      <a
        className="PartnerGroup"
        href="https://africastalking.com/"
        target="_blank"
      >
        <img src={require("../images/at-logo.png")} />
        <p>Africa's Talking</p>
      </a>
      <a
        className="PartnerGroup"
        href="https://www.akiliplus.com/"
        target="_blank"
      >
        <img src={require("../images/akiliplus-logo.png")} />
        <p>Akiliplus</p>
      </a>
      <a className="PartnerGroup" href="https://ihub.co.ke/" target="_blank">
        <img src={require("../images/ihub-logo.png")} />
        <p>iHub Nairobi</p>
      </a>
      <a
        className="PartnerGroup"
        href="https://friends.figma.com/nairobi/"
        target="_blank"
      >
        <img src={require("../images/figma-logo.png")} />
        <p>Figma Nairobi</p>
      </a>
    </div>
  </Layout>
)

export default IndexPage
