import React, { createContext, useMemo, useState } from "react";
import {
  Button,
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
          // primary: '#ffc107',
          // divider: '#ffc107',
          // text: {
          //   primary: grey[900],
          //   secondary: grey[800],
          // },
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
          // palette values for dark mode
          // primary: deepOrange,
          // divider: deepOrange[700],
          // background: {
          //   default: deepOrange[900],
          //   paper: deepOrange[900],
          // },
          // text: {
          //   primary: '#fff',
          //   secondary: grey[500],
          // },
          // primary: {
          //   light: "#001e3c",
          //   main: "#001e3c",
          //   dark: "#001e3c",
          //   contrastText: "#001e3c",
          // },
          primary: {
            main: "#001e3c",
          },
          text: {
            primary: "#000",
          },
          background: { default: "#020814", paper: "#020814" },

        }),
  },
});

function App() {
  const ColorModeContext = createContext({ toggleColorMode: () => {} });

  const [themeMode, setThemeMode] = useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );
  const theme = React.useMemo(
    () => createTheme(getDesignTokens(themeMode)),
    [themeMode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <Home />
        </ThemeProvider>
      </CssBaseline>
    </ColorModeContext.Provider>
  );
}

export default App;
