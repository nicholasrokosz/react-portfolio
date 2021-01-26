import React from "react"
import "twin.macro"

const ProjectCard = ({ src, title, desc, demo, repo }) => (
  <div tw="mx-auto flex flex-col p-6 bg-white rounded-xl shadow-lg p-0">
    <img
      src={src}
      alt={title + " screengrab"}
      tw="rounded-none w-auto h-64 rounded-t-xl hover:opacity-75 transition duration-200 ease-in-out"
    />
    <div tw="mx-6 pb-6">
      <div tw="inline-flex w-full">
        <h4 tw="text-xl text-gray-900 mr-2">{title}</h4>
        <a href={demo} tw="bg-none mr-2">
          <img tw="float-right" src="link.svg" alt="link" />
        </a>{" "}
        <a href={repo} tw="bg-none">
          <img tw="float-right" src="archive.svg" alt="repo" />
        </a>
      </div>
      <p tw="text-base text-gray-600">{desc}</p>
    </div>
  </div>
)

export default ProjectCard
