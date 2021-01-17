import React from "react"
import { Link } from "gatsby"
import "twin.macro"

const ListLink = props => (
  <li tw="inline mr-4">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const myName = "< Nick Rokosz />"

const Header = () => (
  <header tw="mb-6 flex flex-col items-center justify-between md:flex-row max-w-screen-md mx-auto">
    <Link to="/" tw="shadow-none bg-none">
      <h1 tw="inline text-3xl">{myName}</h1>
    </Link>
    <ul tw="list-none float-right text-gray-900 flex flex-row items-stretch justify-between">
      <div tw="md:border-r md:border-gray-900">
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </div>
      <div tw="w-20 flex justify-between md:ml-4">
        <a href="https://github.com/nicholasrokosz" tw="bg-none">
          <i className="fa fa-github-square" aria-hidden="true"></i>
          {/* GitHub */}
        </a>
        <a
          href="https://www.linkedin.com/in/nick-rokosz-9085191ba/"
          tw="md:ml-4 bg-none"
        >
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
          {/* LinkedIn */}
        </a>
        <button tw="md:pl-4">
          <i className="fa fa-moon-o" aria-hidden="true"></i>
        </button>
      </div>
    </ul>
  </header>
)

export default Header
