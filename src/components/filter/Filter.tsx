import cl from './Filter.module.scss';
import {changeFilter, clearCompletedTask} from '../../store/reducers/todo.ts';
import {useEffect, useState} from 'react';
import {useAppSelector} from '../../store/store.ts';
import {useDispatch} from 'react-redux';
import classNames from 'classnames';

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
                    className={classNames(cl.button, {[cl.activeFilter]: filter === 'all'})}
                    onClick={() => dispatch(changeFilter('all'))}
                >All
                </button>
                <button
                    className={classNames(cl.button, {[cl.activeFilter]: filter === 'active'})}
                    onClick={() => dispatch(changeFilter('active'))}
                >Active
                </button>
                <button
                    className={classNames(cl.button, {[cl.activeFilter]: filter === 'completed'})}
                    onClick={() => dispatch(changeFilter('completed'))}
                >Completed
                </button>
            </div>
            <div>
                <button
                    className={classNames(cl.button, cl.buttonClearAll)}
                    onClick={() => dispatch(clearCompletedTask())}
                >
                    Clear completed
                </button>
            </div>
        </div>
    );
};