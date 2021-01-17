import React from "react"
import Layout from "../components/layout"
import "twin.macro"

export default function fourOhFour() {
  return (
    <Layout>
      <div tw="text-center mt-20">
        <h1 tw="text-2xl">Oh no!</h1>
        <p>404: page not found</p>
      </div>
    </Layout>
  )
}
