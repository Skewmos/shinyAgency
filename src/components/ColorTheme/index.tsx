import { useContext } from "react"
import { ThemeContext } from "../../utils/context/themeContext"

const ColorTheme: React.FC  = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  
  return (
    <>
      <span onClick={() => toggleTheme()}>
         {theme === 'light' ? '☀️' : '🌙'}
      </span>
    </>
  );
}

export default ColorTheme;