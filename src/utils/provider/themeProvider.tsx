import { ReactNode, useEffect, useState } from "react"
import {ThemeContext} from "../context/themeContext";
import LogoLight from "../../assets/logo.svg";
import LogoDark from "../../assets/logo-dark.svg";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<string>('light');
  const [logo, setLogo] = useState<string>(theme === 'dark'? LogoLight : LogoDark);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');

  };

  const switchLogo = () => {
    setLogo(theme === "dark" ? LogoDark : LogoLight);
  };

  useEffect(() => {
    switchLogo();
    const body = document.querySelector('body');
    const currentClass = body?.className;
    const newClass = currentClass  !== 'lightTheme' ? 'lightTheme' : 'darkTheme';
    if (currentClass) {
      body?.classList.remove(currentClass);
    }
    body?.classList.add(newClass);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, logo }}>
        {children}
    </ThemeContext.Provider>
);
};