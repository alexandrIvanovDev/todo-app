import Header from '../header/Header.tsx';
import {TextField} from '../textField/TextField.tsx';
import {List} from '../list/List.tsx';
import cl from './Todo.module.scss'
import {FC, useEffect} from 'react';
import {useAppSelector} from '../../store/store.ts';
import {LOCAL_STORAGE_TASKS_KEY, setReorderTasks} from '../../store/reducers/todo.ts';
import {useDispatch} from 'react-redux';

export const Todo: FC = () => {
    const tasks = useAppSelector(state => state.todo.tasks)

    const dispatch = useDispatch()

    useEffect(() => {
        const res = localStorage.getItem(LOCAL_STORAGE_TASKS_KEY)
        if (res) {
            dispatch(setReorderTasks(JSON.parse(res)))
        }
    }, []);

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