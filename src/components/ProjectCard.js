import React from "react"
import "twin.macro"

const ProjectCard = ({ src, title, desc }) => (
  <div tw="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
    <div tw="flex-shrink-0">
      <img src={src} alt={title + " screengrab"} tw="h-12 w-12" />
    </div>
    <div tw="ml-6 pt-1">
      <h4 tw="text-xl text-gray-900">{title}</h4>
      <p tw="text-base text-gray-600">{desc}</p>
    </div>
  </div>
)

export default ProjectCard
