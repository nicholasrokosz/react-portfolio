import React from "react"
// import { useMediaPredicate } from "react-media-hook"
import { Link } from "gatsby"
import "twin.macro"

const ListLink = props => (
  <li tw="inline mr-4">
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const open = "< "
const close = " />"

// const changeTheme = () => {}

const Header = () => {
  // const [theme, setTheme] = useState(
  //   useMediaPredicate("(prefers-color-scheme: dark)") ? "dark" : "light"
  // )

  // const [icon, setIcon] = useState(
  //   useMediaPredicate("(prefers-color-scheme: dark)") ? "dark" : "light"
  // )

  return (
    <header tw="flex flex-col items-center justify-around lg:justify-between md:flex-row max-w-screen-md mx-auto 2xl:max-w-screen-lg">
      <Link to="/" tw="shadow-none bg-none">
        <h1 tw="inline text-xl">
          <span tw="animate-pulse">{open}</span>Nick Rokosz
          <span tw="animate-pulse">{close}</span>
        </h1>
      </Link>
      <ul tw="list-none float-right text-gray-900 flex flex-row items-stretch justify-between">
        <div tw="md:border-r md:border-gray-900">
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </div>
        {/* switch back to justify-between for dark switch */}
        <div tw="w-20 flex justify-start md:ml-4">
          <a
            href="https://github.com/nicholasrokosz"
            target="_blank"
            rel="noreferrer"
            tw="bg-none transition transform hover:scale-125 duration-300 ease-in-out"
          >
            <i className="fa fa-github-square" aria-hidden="true"></i>
            {/* GitHub */}
          </a>
          <a
            href="https://www.linkedin.com/in/nick-rokosz-9085191ba/"
            target="_blank"
            rel="noreferrer"
            tw="md:ml-4 bg-none transition transform hover:scale-125 duration-300 ease-in-out"
          >
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            {/* LinkedIn */}
          </a>
          {/* <button tw="md:pl-4 transition transform hover:scale-125 duration-300 ease-in-out active:outline-none focus:outline-none">
            <i className="fa fa-moon-o" aria-hidden="true"></i>
          </button> */}
        </div>
      </ul>
    </header>
  )
}

export default Header
