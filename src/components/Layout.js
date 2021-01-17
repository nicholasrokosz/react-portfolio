import React from "react"
import { GlobalStyles } from "twin.macro"
import Header from "./Header"

const Layout = ({ children }) => (
  <div tw="my-12 mx-auto px-4 max-w-screen-md">
    <Header />
    <GlobalStyles />
    {children}
  </div>
)

export default Layout
