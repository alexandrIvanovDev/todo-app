import Header from '../header/Header.tsx';
import {TextField} from '../textField/TextField.tsx';
import {List} from '../list/List.tsx';
import cl from './Todo.module.css'
import {FC} from 'react';
import {useAppSelector} from '../../store/store.ts';

export const Todo: FC = () => {
    const tasks = useAppSelector(state => state.todo.tasks)

    return (
        <div className={cl.container}>
            <Header/>
            <TextField />
            <List tasks={tasks}/>
        </div>
    );
};