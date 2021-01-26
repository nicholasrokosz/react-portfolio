import React from "react"
import Layout from "../components/layout"
import "twin.macro"

export default function About() {
  return (
    <Layout>
      <main tw="my-6 mx-auto max-w-xs text-xl sm:text-4xl lg:max-w-screen-md xl:mt-16 xl:mb-8">
        <h1 tw="leading-loose">A bit about me:</h1>
        <p tw="max-w-prose text-lg leading-loose">
          <span role="img" aria-label="laptop">
            🌵
          </span>{" "}
          I'm a software developer living in Phoenix, AZ
          <br></br>
          <span role="img" aria-label="laptop">
            💻
          </span>{" "}
          I recently completed the University of Arizona's Coding Bootcamp
          <br></br>
          <span role="img" aria-label="books">
            📚
          </span>{" "}
          I love learning! I mostly read about computing, philosophy, and pop
          psychology
          <br></br>
          <span role="img" aria-label="gear">
            ⚙️
          </span>{" "}
          My favorite tools/technologies are JavaScript, Typescript, React,
          and Gatsby
        </p>
      </main>
    </Layout>
  )
}
