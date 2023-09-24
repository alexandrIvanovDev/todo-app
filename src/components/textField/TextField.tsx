import cl from './TextField.module.scss'
import {ChangeEvent, KeyboardEvent, useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../../store/reducers/todo.ts';

export const TextField = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    const onAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(addTask(inputValue))
            setInputValue('')
        }
    }

    return (
        <div className={cl.wrapper}>
            <div className={cl.circle}></div>
            <input
                type="text"
                className={cl.input}
                placeholder='Create a new todo...'
                value={inputValue}
                onChange={onInputHandler}
                onKeyDown={onAddTask}
                data-testid='textfield'
            />
        </div>
    );
};