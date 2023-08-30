import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from '../lib/ThemeContext.ts';
import {FC, ReactNode, useMemo, useState} from 'react';

const defaultTheme = LOCAL_STORAGE_THEME_KEY as Theme || Theme.LIGHT

type PropsType = {
    children: ReactNode
}

export const ThemeProvider: FC<PropsType> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}