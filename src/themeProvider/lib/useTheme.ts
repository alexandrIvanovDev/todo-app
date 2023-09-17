import {useContext} from 'react';
import {Theme, ThemeContext} from './ThemeContext.ts';

type UseThemeResult = {
    theme: Theme,
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        // @ts-ignore
        setTheme(newTheme)
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    // @ts-ignore
    return {theme, toggleTheme}
}