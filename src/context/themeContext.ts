import { PaletteMode } from "@mui/material"
import { createContext, useContext } from "react"
export type ThemeContent = {
    themeMode: PaletteMode
    setTheme:() => void
}
export const MyThemeContext = createContext<ThemeContent>({
    themeMode: "light",
    setTheme: () => {}
})
export const useThemeContext = () => useContext(MyThemeContext)