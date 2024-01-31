import { FC, ReactNode, useMemo, useState } from 'react';

import { useAppSelector } from 'src/app/providers/store/store.ts';

import { Theme, ThemeContext } from './ThemeContext.ts';

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
