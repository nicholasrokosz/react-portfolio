import Typography from "typography"
import lincolnTheme from "typography-theme-lincoln"

lincolnTheme.overrideThemeStyles = () => ({
  a: {
    textShadow: "none",
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${"#111827"} 1px, ${"#111827"} 2px, rgba(0, 0, 0, 0) 2px)`,
  },
})

const typography = new Typography(lincolnTheme)

export const { scale, rhythm, options } = typography
export default typography
