import Header from '../header/Header.tsx';
import {TextField} from '../textField/TextField.tsx';
import {List} from '../list/List.tsx';
import cl from './Todo.module.scss'
import {FC} from 'react';
import {useAppSelector} from '../../store/store.ts';

export const Todo: FC = () => {
    const tasks = useAppSelector(state => state.todo.tasks)

    return (
        <div className={cl.container}>
            <Header/>
            <TextField />
            {tasks.length
                ? <List/>
                : <h2 className={cl.header}>Add a new task</h2>
            }
        </div>
    );
};