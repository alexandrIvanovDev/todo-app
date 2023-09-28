import { useTheme } from "../../themeProvider/lib/useTheme.ts";
import { Theme } from "../../themeProvider/lib/ThemeContext.ts";
import moonIcon from "../../assets/images/icon-moon.svg";
import sunIcon from "../../assets/images/icon-sun.svg";
import cl from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={cl.btn}>
      <img src={theme === Theme.LIGHT ? moonIcon : sunIcon} alt="themeIcon" />
    </button>
  );
};
