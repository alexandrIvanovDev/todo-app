import {FC, useEffect, useState} from 'react';
import {Task} from '../task/Task.tsx';
import cl from './List.module.css'
import {TaskType} from '../../store/reducers/todo.ts';

type PropsType = {
    tasks: TaskType[]
}

export const List: FC<PropsType> = ({tasks}) => {
    const [leftItems, setLeftItems] = useState(0)

    useEffect(() => {
        setLeftItems(tasks.filter(t => !t.checked).length)
    }, []);


    return (
        <>
            <div className={cl.tasksWrapper}>
                {tasks.map(task => {
                    return <Task key={task.id} task={task}/>
                })}
            </div>
            <div className={cl.wrapper}>
                <div>
                    <span>{leftItems} items left</span>
                </div>
                <div>
                    <button className={cl.button}>All</button>
                    <button className={cl.button}>Active</button>
                    <button className={cl.button}>Completed</button>
                </div>
                <div>
                    <button className={cl.button}>Clear completed</button>
                </div>
            </div>
        </>
    );
};