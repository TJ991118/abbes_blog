import { themeTransVar } from "@abbes/design-theme-color"
import defaultTheme from "@/styles/theme/default.json"

export const setTheme = () => {
  const root = document.documentElement
  const vars = themeTransVar(defaultTheme, false)
  Object.entries(vars).forEach(([key, value]) => {
    root.style.setProperty(key, `#${value}` as string);
  })
}

