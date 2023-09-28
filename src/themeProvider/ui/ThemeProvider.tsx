import { Theme, ThemeContext } from '../lib/ThemeContext.ts';
import { FC, ReactNode, useMemo, useState } from 'react';
import { useAppSelector } from '../../store/store.ts';

type PropsType = {
  children: ReactNode;
};

export const ThemeProvider: FC<PropsType> = ({ children }) => {
  const themeFromLS = useAppSelector((state) => state.todo.theme);
  const [theme, setTheme] = useState<Theme>(themeFromLS);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
