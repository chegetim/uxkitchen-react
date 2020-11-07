import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"

const IndexPage = () => (
  <Layout>
    <SEO title="UX Kitchen KE" />
    <div className="Banner">
      <div className="BannerGroup">
        <h1>Less bs, more UX2</h1>
        <p>
          Helping entrepreneurs and professionals learn to build products that
          are useful, usable, desirable, and ultimately adoptable through good
          UX.
        </p>
        <Link to="https://www.meetup.com/UX-Kichen" target="blank">
          <button>Join the Community</button>
        </Link>
      </div>
    </div>
    <div className="Logos">
      <Link className="LogoGroup" to="https://www.meetup.com/UX-Kichen">
        <img src={require("../images/meetup-logo.png")} />
        <p>We meet once a month</p>
      </Link>
      <Link className="LogoGroup" to="https://medium.com/@uxkitchenke">
        <img src={require("../images/medium-logo.png")} />
        <p>Worth checking out</p>
      </Link>
      <Link
        className="LogoGroup"
        to="https://join.slack.com/t/ux-kitchen/shared_invite/zt-eqq3hd4x-EN0MCKTdpc_PShx~aJUilQ"
      >
        <img src={require("../images/slack-logo.png")} />
        <p>Our growing chat room</p>
      </Link>
      <Link className="LogoGroup" to="https://twitter.com/uxkitchenke">
        <img src={require("../images/twitter-logo.png")} />
        <p>There's not much here</p>
      </Link>
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
      <Link to="/contact-us">
        <button>Let UX Kitchen save your day</button>
      </Link>
    </div>
    <div className="Partners">
      <h3 className="PartnerGroup">Partners:</h3>
      <Link className="PartnerGroup" to="https://africastalking.com/">
        <img src={require("../images/at-logo.png")} />
        <p>Africa's Talking</p>
      </Link>
      <Link className="PartnerGroup" to="https://www.akiliplus.com/">
        <img src={require("../images/akiliplus-logo.png")} />
        <p>Akiliplus</p>
      </Link>
      <Link className="PartnerGroup" to="https://ihub.co.ke/">
        <img src={require("../images/ihub-logo.png")} />
        <p>iHub Nairobi</p>
      </Link>
      <Link className="PartnerGroup" to="https://friends.figma.com/nairobi/">
        <img src={require("../images/figma-logo.png")} />
        <p>Figma Nairobi</p>
      </Link>
    </div>
  </Layout>
)

export default IndexPage
