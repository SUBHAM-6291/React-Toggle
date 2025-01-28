import { createContext, useContext } from "react";

// Create the ThemeContext
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Export the ThemeProvider
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the ThemeContext
export default function useTheme() {
  return useContext(ThemeContext); // Correct capitalization of useContext
}
