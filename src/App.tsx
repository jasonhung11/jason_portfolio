import React, { createContext, useMemo, useState } from 'react';
import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { amber, grey, deepOrange, } from '@mui/material/colors';
import Home from 'src/components/Home';
import "./App.css"
// import Home from 'components/Home';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: grey[900],
            secondary: grey[800],
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
            primary: '#fff',
            secondary: grey[500],
          },
        }),
  },
});

function App() {
  const ColorModeContext = createContext({ toggleColorMode: () => {} });

  
  const [themeMode, setThemeMode] = useState<PaletteMode>("light")
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setThemeMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );
  const theme = React.useMemo(() => createTheme(getDesignTokens(themeMode)), [themeMode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Home/>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
