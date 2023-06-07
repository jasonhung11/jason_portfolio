import React, { createContext, useMemo, useState } from "react";
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import { amber, grey, deepOrange } from "@mui/material/colors";
import Home from "src/components/Home";
import "./App.css";
// import Home from 'components/Home';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            light: "#99A98F",
            main: "#C1D0B5",
            dark: "#D6E8DB",
            contrastText: "#FFF8DE",
          },
          secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            light: "#27374D",
            main: "#fff",
            dark: "#27374D",
            contrastText: "#fff",
          },
          background: {
            default: "#27374D",
            paper: "#526D82", 
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

function App() {
  const ColorModeContext = createContext({ toggleColorMode: () => {} });

  const [themeMode, setThemeMode] = useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setThemeMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       light: "#99A98F",
  //       main: "#C1D0B5",
  //       dark: "#D6E8DB",
  //       contrastText: "#FFF8DE",
  //     },
  //     secondary: {
  //       light: "#ff7961",
  //       main: "#f44336",
  //       dark: "#ba000d",
  //       contrastText: "#000",
  //     },
  //   },
  // });
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
