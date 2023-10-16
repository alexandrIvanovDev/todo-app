import { createContext } from 'react';

export enum Theme {
  'DARK' = 'dark',
  'LIGHT' = 'light',
}

type Props = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

export const ThemeContext = createContext<Props>({});
