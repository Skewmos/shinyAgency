import { createContext } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
  logo: string;
}

export const ThemeContext = createContext<ThemeContextType>();