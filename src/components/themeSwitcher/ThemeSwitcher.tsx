import { Theme } from 'src/app/providers/themeProvider/ThemeContext.ts';
import { MoonIcon } from 'src/assets/icons/moon.tsx';
import { SunIcon } from 'src/assets/icons/sun.tsx';
import { useTheme } from 'src/hooks/useTheme.ts';

import cl from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={cl.btn} onClick={toggleTheme}>
      {theme === Theme.LIGHT ? (
        <MoonIcon className={cl.icon} />
      ) : (
        <SunIcon className={cl.icon} />
      )}
    </button>
  );
};
