import cl from './TextField.module.css'
import {ChangeEvent, FC, useState, KeyboardEvent} from 'react';
import {useDispatch} from 'react-redux';
import {addTask} from '../../store/reducers/todo.ts';

type PropsType = {
    value?: string
    checked?: boolean
}

export const TextField: FC<PropsType> = ({value}) => {
    const [inputValue, setInputValue] = useState(value || '')
    // const [isChecked, setIsChecked] = useState(checked)

    const dispatch = useDispatch()

    const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }

    // const onCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setIsChecked(e.currentTarget.checked)
    // }

    const onAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(addTask(inputValue))
            setInputValue('')
        }
    }

    return (
        <div className={cl.wrapper}>
            {/*<input*/}
            {/*    type="checkbox"*/}
            {/*    className={cl.checkbox}*/}
            {/*    checked={isChecked}*/}
            {/*    onChange={onCheckboxHandler}*/}
            {/*/>*/}
            <div className={cl.circle}></div>
            <input
                type="text"
                className={cl.input}
                placeholder='Crate a new todo...'
                value={inputValue}
                onChange={onInputHandler}
                onKeyDown={onAddTask}
            />
        </div>
    );
};