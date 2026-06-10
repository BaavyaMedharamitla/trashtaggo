import React, { createContext, useState, useEffect, useContext } from "react";

// 1. Create the base context layer
export const ThemeContext = createContext();

// 2. Main Provider Component managing HTML classes and localStorage saves
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "light") {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. ADD THIS HOOK LAYER AT THE BOTTOM:
// This instantly resolves the Navbar line 2 compilation crash!
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be wrapped securely within a ThemeProvider wrapper.");
  }
  return context;
}