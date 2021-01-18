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
    <div tw="flex justify-center align-middle mt-12 pb-8">
      <p tw="mx-1.5">
        © 2021 | Built by{" "}
        <a href="https://github.com/nicholasrokosz">Nick Rokosz</a> with{" "}
      </p>
      <a href="https://www.gatsbyjs.com/" tw="bg-none">
        <InlineIcon icon={fileTypeGatsby} height="1.5em" />
      </a>
      <p tw="mx-1.5">+</p>
      <a href="https://tailwindcss.com/" tw="bg-none">
        <InlineIcon icon={fileTypeTailwind} height="1.5em" />
      </a>
    </div>
  </footer>
)

export default Footer
