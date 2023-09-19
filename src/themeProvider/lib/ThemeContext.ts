import {createContext} from 'react';

export enum Theme {
    'LIGHT'= 'light',
    'DARK'= 'dark'
}

type Props = {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<Props>({})