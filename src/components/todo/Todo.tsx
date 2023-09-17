import Header from '../header/Header.tsx';
import {TextField} from '../textField/TextField.tsx';
import {List} from '../list/List.tsx';
import cl from './Todo.module.css'
import {FC} from 'react';
import {useAppSelector} from '../../store/store.ts';
import desktopLight from '../../assets/images/bg-desktop-light.jpg';
import desktopDark from '../../assets/images/bg-desktop-dark.jpg';
import {useTheme} from '../../themeProvider/lib/useTheme.ts';
import {Theme} from '../../themeProvider/lib/ThemeContext.ts';

export const Todo: FC = () => {
    const tasks = useAppSelector(state => state.todo.tasks)
    const {theme} = useTheme()

    return (
        <div className={cl.container}>
            <img src={theme === Theme.LIGHT ? desktopLight : desktopDark} alt='background' className={cl.background}/>
            <Header/>
            <TextField />
            {tasks.length
                ? <List/>
                : <h2 className={cl.header}>Add a new task</h2>
            }
        </div>
    );
};