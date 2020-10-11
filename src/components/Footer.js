import React from "react"
import { Link } from "gatsby"

import "./footer.css"

const Footer = props => (
    <div className="Footer">
      <div className="FooterGroup">
        <p>Decoded Spaces</p>
        <p>Galana Plaza, along Galana RD</p>
        <p>Kilimani, Nairobi.</p>
        <p>KENYA</p>
      </div>
      <div className="FooterGroup">
        <p>+254 786 770 842</p>
        <p className="Centred">OR</p>
        <p>+254 746 964 504</p>
      </div>
      <div className="FooterGroup">
        <p>uxkitchenke@gmail.com</p>
        <p className="Centred">OR</p>
        <p>sheidynjiiri@gmail.com</p>
      </div>
    </div>
)

export default Footer