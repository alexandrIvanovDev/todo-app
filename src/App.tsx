import cl from './App.module.css';
import {Todo} from './components/todo/Todo.tsx';
import classNames from 'classnames';
import {useTheme} from './themeProvider/lib/useTheme.ts';
import {Theme} from './themeProvider/lib/ThemeContext.ts';
import desktopLight from './assets/images/bg-desktop-light.jpg';
import desktopDark from './assets/images/bg-desktop-dark.jpg';
import './index.scss';

function App() {
    const {theme} = useTheme()
    return (
        <div className={classNames('app', theme)}>
            <img src={theme === Theme.LIGHT ? desktopLight : desktopDark} alt="background" className={cl.background}/>
            <Todo/>
        </div>
    )
}

export default App
