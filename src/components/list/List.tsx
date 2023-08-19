import {FC} from 'react';
import {Task} from '../task/Task.tsx';
import cl from './List.module.css'
import {Filter} from '../filter/Filter.tsx';
import {useAppSelector} from '../../store/store.ts';


export const List: FC = () => {
    const {tasks, filter} = useAppSelector(state => state.todo)

    let filteredTask = tasks

    if (filter === 'active') {
        filteredTask = tasks.filter(t => !t.checked)
    }
    if (filter === 'completed') {
        filteredTask = tasks.filter(t => t.checked)
    }

    return (
        <>
            <div className={cl.tasksWrapper}>
                {filteredTask.map(task => <Task key={task.id} task={task}/>)}
            </div>
            <Filter/>
        </>
    );
};