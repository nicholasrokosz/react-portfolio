import React from "react"
import "twin.macro"

const ProjectCard = ({ src, title, desc }) => (
  <div tw="mx-auto flex flex-col p-6 bg-white rounded-xl shadow-lg p-0">
    <img
      src={src}
      alt={title + " screengrab"}
      tw="rounded-none w-auto h-64 rounded-t-xl"
    />
    <div tw="ml-6 pb-6">
      <h4 tw="text-xl text-gray-900">{title}</h4>
      <p tw="text-base text-gray-600">{desc}</p>
    </div>
  </div>
)

export default ProjectCard
