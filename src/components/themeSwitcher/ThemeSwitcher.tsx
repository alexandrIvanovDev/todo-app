import moonIcon from 'src/assets/images/icon-moon.svg';
import sunIcon from 'src/assets/images/icon-sun.svg';
import { Theme } from 'src/themeProvider/lib/ThemeContext.ts';
import { useTheme } from 'src/themeProvider/lib/useTheme.ts';

import cl from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={cl.btn} onClick={toggleTheme}>
      <img alt='themeIcon' src={theme === Theme.LIGHT ? moonIcon : sunIcon} />
    </button>
  );
};
