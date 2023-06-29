import React, { useState } from "react";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import Home from "./components/Home";
import "./App.css";
import { useMediaQuery } from "./useMediaQuery";
import { MyThemeContext } from "./context/themeContext";

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            light: "#000",
            main: "#fff",
            dark: "#000",
            contrastText: "#000",
          },
          background: {
            default: "#fff",
            paper: "#fff",
          },
          secondary: {
            main: "#64748B",
            contrastText: "#fff",
          },
        }
      : {
          primary: {
            light: "#fff",
            main: "#000",
            dark: "#fff",
            contrastText: "#fff",
          },
          background: {
            default: "#000",
            paper: "#01040E",
          },
          secondary: {
            main: "#fff",
            contrastText: "#000",
          },
        }),
  },
});

function App() {
  const isRowBased = useMediaQuery("(min-width: 818px)");
  const [themeMode, setThemeMode] = useState<PaletteMode>("light");
  const theme = React.useMemo(
    () => createTheme(getDesignTokens(themeMode)),
    [themeMode]
  );

  const setTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme}>
      <MyThemeContext.Provider value={{ themeMode, setTheme }}>
        <CssBaseline>
          <Home />
        </CssBaseline>
      </MyThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
