import { useContext } from 'react';
import { useDispatch } from 'react-redux';

import { changeTheme } from 'src/store/reducers/todo.ts';

import { Theme, ThemeContext } from './ThemeContext.ts';

type UseThemeResult = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    if (setTheme) {
      setTheme(newTheme);
    }
    dispatch(changeTheme(newTheme));
  };

  return { theme, toggleTheme } as UseThemeResult;
};
