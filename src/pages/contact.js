import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout.js"
import SEO from "../components/seo.js"

const Contact = props => (
  <Layout>
    <SEO title="Contact Us" />
    <div className="HeaderCorporates" />
    <form action="https://formspree.io/f/xyybddnd" method="POST">
      <FormGroup>
        <NameGroup>
          <label>Name</label>
          <input type="text" name="name" id="name" />
        </NameGroup>
        <EmailGroup>
          <label>Email</label>
          <input type="email" name="email" id="email" />
        </EmailGroup>
        <MessageGroup>
          <label>Message</label>
          <textarea name="message" id="message" rows="5" />
        </MessageGroup>
        <SendBtn>
          <button type="submit">Send</button>
        </SendBtn>
        <ClearBtn>
          <button type="reset">Clear</button>
        </ClearBtn>
      </FormGroup>
    </form>
  </Layout>
)

export default Contact

const FormGroup = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-items: center;
  grid-gap: 30px;
  padding-top: 280px;
  width: 100%;
  @media (max-width: 640px) {
    padding-top: 160px;
  }
`

const NameGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 600px;
  input {
    margin-top: 10px;
    height: 50px;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
    font-size: 20px;
  }
  @media (max-width: 640px) {
    width: 320px;
  }
`
const EmailGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 600px;
  input {
    margin-top: 10px;
    height: 50px;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
    font-size: 20px;
  }
  @media (max-width: 640px) {
    width: 320px;
  }
`
const MessageGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 600px;
  textarea {
    margin-top: 10px;
    height: 200px;
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
    font-size: 20px;
  }
  @media (max-width: 640px) {
    width: 320px;
  }
`
const SendBtn = styled.div`
  button {
    margin-top: 20px;
    width: 600px;
    height: 55px;
    @media (max-width: 640px) {
      width: 320px;
    }
  }
`
const ClearBtn = styled.div`
  button {
    width: 600px;
    height: 55px;
    background-color: #4a2c40;
    @media (max-width: 640px) {
      width: 320px;
    }
  }
`
