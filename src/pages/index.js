import React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import "twin.macro"

export default function Home() {
  return (
    <Layout>
      <div tw="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-8 w-11/12 md:w-3/4 mx-auto">
        <ProjectCard
          src="https://source.unsplash.com/random/400x200"
          title="Example Project 1"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Non consectetur a erat nam at lectus. Dolor magna eget est lorem ipsum."
        />
        <ProjectCard
          src="https://source.unsplash.com/random/400x200"
          title="Example Project 2"
          desc="Lorem ipsum dolornt ut labore s. Dolor magna eget est lorem ipsum."
        />
        <ProjectCard
          src="https://source.unsplash.com/random/400x200"
          title="Example Project 3"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Non consectetur a erat nam at lectus. Dolor magna eget est lorem ipsum."
        />
        <ProjectCard
          src="https://source.unsplash.com/random/400x200"
          title="Example Project 4"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Non consectetur a erat nam at lectus. Dolor magna eget est lorem ipsum."
        />
        <ProjectCard
          src="https://source.unsplash.com/random/400x200"
          title="Example Project 5"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Non consectetur a erat nam at lectus. Dolor magna eget est lorem ipsum."
        />
        <ProjectCard
          src="https://source.unsplash.com/random/400x200"
          title="Example Project 6"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Non consectetur a erat nam at lectus. Dolor magna eget est lorem ipsum."
        />
      </div>
    </Layout>
  )
}
