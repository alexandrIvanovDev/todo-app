import cl from './Filter.module.css';
import {changeFilter, clearCompletedTask} from '../../store/reducers/todo.ts';
import {useEffect, useState} from 'react';
import {useAppSelector} from '../../store/store.ts';
import {useDispatch} from 'react-redux';

export const Filter = () => {
    const [leftItems, setLeftItems] = useState(0)
    const {tasks, filter} = useAppSelector(state => state.todo)

    const dispatch = useDispatch()

    useEffect(() => {
        setLeftItems(tasks.filter(t => !t.checked).length)
    });

    return (
        <div className={cl.wrapper}>
            <div>
                <span>{leftItems} items left</span>
            </div>
            <div>
                <button
                    className={`${cl.button} ${filter === 'all' && cl.activeFilter}`}
                    onClick={() => dispatch(changeFilter('all'))}
                >All
                </button>
                <button
                    className={`${cl.button} ${filter === 'active' && cl.activeFilter}`}
                    onClick={() => dispatch(changeFilter('active'))}
                >Active
                </button>
                <button
                    className={`${cl.button} ${filter === 'completed' && cl.activeFilter}`}
                    onClick={() => dispatch(changeFilter('completed'))}
                >Completed
                </button>
            </div>
            <div>
                <button
                    className={`${cl.button} ${cl.buttonClearAll}`}
                    onClick={() => dispatch(clearCompletedTask())}
                >
                    Clear completed
                </button>
            </div>
        </div>
    );
};