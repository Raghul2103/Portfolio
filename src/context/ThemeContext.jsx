import { createContext, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const ThemeContext = createContext();

export const CustomThemeProvider = ({ children }) => {
  const [mode, setMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    const root = window.document.documentElement;

    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const muiTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: "#2563eb",
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={muiTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};