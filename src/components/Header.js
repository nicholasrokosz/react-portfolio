import React from "react"
import { Link } from "gatsby"
import "twin.macro"

const ListLink = props => (
  <li tw="inline mr-4">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = () => (
  <header tw="mb-6">
    <Link to="/" tw="shadow-none bg-none">
      <h3 tw="inline">Nick Rokosz</h3>
    </Link>
    <ul tw="list-none float-right">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
  </header>
)

export default Header
