import { useContext } from "react";
import { Theme, ThemeContext } from "./ThemeContext.ts";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/reducers/todo.ts";

type UseThemeResult = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    // @ts-ignore
    setTheme(newTheme);
    dispatch(changeTheme(newTheme));
  };

  // @ts-ignore
  return { theme, toggleTheme };
};
