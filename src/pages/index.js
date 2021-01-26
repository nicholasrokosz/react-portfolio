import React from "react"
import Layout from "../components/layout"
import ProjectCard from "../components/ProjectCard"
import "twin.macro"

export default function Home() {
  return (
    <Layout>
      <div tw="my-6 mx-auto text-center sm:text-4xl xl:text-6xl lg:text-left lg:w-3/4 xl:mt-16 xl:mb-8">
        <h2 tw="leading-normal">
          Hi, I'm Nick{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
          <br />
          Welcome to my portfolio.
        </h2>
      </div>
      <div tw="grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-8 w-11/12 md:w-3/4 mx-auto">
        <ProjectCard
          src="spotifizenator.png"
          title="Spotifizenator9000"
          desc="An easy-to-use web app that helps users find new music based on an artist that they already like. User authentication through the Spotify Web API allows the generated playlists to be saved to a Spotify account for later listening."
          demo="https://spotifizenator9000.herokuapp.com/"
          repo="https://github.com/nicholasrokosz/song-book"
        />
        <ProjectCard
          src="employee-dir.png"
          title="Employee Directory"
          desc="A React SPA that lets users view employee information. The name column can be sorted be alphabetical or reverse alphabetical order. The employee info is generated using randomuser.me."
          demo="https://nicks-employee-directory.netlify.app/"
          repo="https://github.com/nicholasrokosz/employee-dir"
        />
        <ProjectCard
          src="fitness-tracker.png"
          title="Fitness Tracker"
          desc="A web app to store workout data and see weekly stats visualized. This project uses a MongoDB database and Chart.js for visualization."
        />
        <ProjectCard
          src="https://source.unsplash.com/random/400x200"
          title="Example Project 4"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa tincidunt. Non consectetur a erat nam at lectus. Dolor magna eget est lorem ipsum."
          demo="https://nicks-employee-directory.netlify.app/"
          repo="https://github.com/nicholasrokosz/employee-dir"
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
