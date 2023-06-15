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
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
          },
          background: {
            default: "#fff",
            paper: "#fff",
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
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

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

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
