import React from "react"
import { GlobalStyles } from "twin.macro"
import Header from "./Header"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => (
  <html tw="bg-indigo-50 h-screen">
    <div tw="my-12 mx-auto px-4 max-w-screen-md">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nick Rokosz</title>
        {/* might be slow, test before deployment */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css"
          integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY="
          crossorigin="anonymous"
        />
      </Helmet>
      <Header />
      <GlobalStyles />
      {children}
    </div>
  </html>
)

export default Layout
