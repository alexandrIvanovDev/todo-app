import cl from './TextField.module.scss'
import {ChangeEvent, FC, useState, KeyboardEvent} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../../store/reducers/todo.ts';

type PropsType = {
    value?: string
}

export const TextField: FC<PropsType> = ({value}) => {
    const [inputValue, setInputValue] = useState(value || '')

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
            />
        </div>
    );
};