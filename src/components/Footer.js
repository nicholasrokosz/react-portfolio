import React from "react"
import "twin.macro"
import { InlineIcon } from "@iconify/react"
import fileTypeGatsby from "@iconify-icons/vscode-icons/file-type-gatsby"
import fileTypeTailwind from "@iconify-icons/vscode-icons/file-type-tailwind"

const Footer = () => (
  // <footer tw="mt-12 pb-8 text-center">
  //   <p tw="text-xs sm:text-base">
  //     © 2021 Built by{" "}
  //     <a href="https://github.com/nicholasrokosz">Nick Rokosz</a> with Gatsby
  //     and Tailwind CSS
  //   </p>
  // </footer>
  <footer>
    <div tw="flex justify-center align-middle h-12 mt-12 text-sm">
      <p tw="mx-1.5">
        © 2021 | Built by{" "}
        <a href="https://github.com/nicholasrokosz">Nick Rokosz</a> with{" "}
      </p>
      <a
        href="https://www.gatsbyjs.com/"
        target="_blank"
        rel="noreferrer"
        tw="bg-none transition duration-300 transform hover:scale-125 ease-in-out"
      >
        <InlineIcon icon={fileTypeGatsby} height="1.25em" />
      </a>
      <p tw="mx-1.5">+</p>
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        rel="noreferrer"
        tw="bg-none transition duration-300 transform hover:scale-125 ease-in-out"
      >
        <InlineIcon icon={fileTypeTailwind} height="1.25em" />
      </a>
    </div>
  </footer>
)

export default Footer
