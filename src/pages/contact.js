import React from "react"
import Layout from "../components/layout"
import "twin.macro"

export default function Contact() {
  return (
    <Layout>
      <main tw="my-6 mx-auto max-w-xs text-xl sm:text-4xl lg:max-w-screen-md xl:mt-16 xl:mb-8">
        <h1 tw="leading-loose">I would love to hear from you!</h1>
        <p tw="max-w-prose text-lg leading-loose">
          ✉️ <a href="mailto:contact@nickrokosz.com">contact@nickrokosz.com</a>
          <br></br>
          📞 (602) 555-0115
        </p>
      </main>
    </Layout>
  )
}
